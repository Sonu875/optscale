echo "OptiCloud cleanup script for obsolete_images recommendations module.
Script will delete all images based on json file downloaded from recommendations page.
Only images related to cloud account ###CLOUD_ACCOUNT_NAME### which is associated with
###CLOUD_ACCOUNT_TYPE### - ###CLOUD_ACCOUNT_ACCOUNT_ID### will be deleted."

if ! command -v aws 1>/dev/null 2>/dev/null; then
    echo "aws cli is not installed"
    exit 1
fi
if ! command -v jq 1>/dev/null 2>/dev/null; then
    echo "jq is not installed"
    exit 1
fi
if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <path to recommendations json>"
    exit 1
fi
if [[ ! -f $1 ]]; then
    echo "Invalid recommendations json path: $1"
    exit 1
fi

CLOUD_ACCOUNT_ID="###CLOUD_ACCOUNT_ID###"

already_deleted=()
deleted=()
failed_to_delete=()
jq -r -c '.[]' "$1" |
{
    while read row; do
        row_account_id=$(echo "${row}" | jq -r '.cloud_account_id')
        if [[ "$row_account_id" == "$CLOUD_ACCOUNT_ID" ]]; then
            region=$(echo "${row}" | jq -r '.region')
            ami_id=$(echo "${row}" | jq -r '.cloud_resource_id')
            output=$(aws --region "$region" ec2 deregister-image --image-id "$ami_id" 2>&1)
            if [[ $? -ne 0 ]]; then
                if echo "$output" | grep -q "InvalidAMIID"; then
                    already_deleted+=("$ami_id")
                else
                    failed_to_delete+=("$ami_id\n$output")
                fi
            else
                deleted+=("$ami_id")
            fi
        fi
    done

    echo "Cleanup completed."

    if [[ ${#deleted[*]} -ne 0 ]]; then
        echo "Deleted images:"
        printf '%s\n' "${deleted[@]}"
    fi

    if [[ ${#already_deleted[*]} -ne 0 ]]; then
        echo "Not existing images:"
        printf '%s\n' "${already_deleted[@]}"
    fi

    if [[ ${#failed_to_delete[*]} -ne 0 ]]; then
        echo "Not deleted images due to errors:"
        printf '\n%b\n' "${failed_to_delete[@]}"
    fi
}
