""""filter_criterias"

Revision ID: 000000000002
Revises: 000000000001
Create Date: 2018-03-19 14:36:42.383444

"""
from datetime import datetime
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '000000000002'
down_revision = '000000000001'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    field_table = op.create_table(
        'field',
        sa.Column('created_at', sa.Integer(), nullable=False,
                  default=datetime.utcnow().timestamp),
        sa.Column('deleted_at', sa.Integer(), nullable=False, default=0),
        sa.Column('id', sa.Integer(), nullable=False, autoincrement=True),
        sa.Column('name', sa.String(length=256), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    fields = 'object_type', 'object_id', 'class', 'level', 'ack'
    fields = [
        {'name': field} for field in fields
    ]

    op.bulk_insert(
        field_table,
        fields
    )
    op.create_table(
        'filter_criteria',
        sa.Column('created_at', sa.Integer(), nullable=False),
        sa.Column('deleted_at', sa.Integer(), nullable=False),
        sa.Column('id', sa.String(length=36), nullable=False),
        sa.Column('notification_id', sa.String(length=36), nullable=True),
        sa.Column('field_id', sa.Integer(), nullable=True),
        sa.Column('value', sa.String(length=64), nullable=True),
        sa.ForeignKeyConstraint(['field_id'], ['field.id'], ),
        sa.ForeignKeyConstraint(['notification_id'], ['notification.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.drop_column('notification', 'event_level')
    op.drop_column('notification', 'event_object_type')
    op.drop_column('notification', 'event_object_id')
    op.drop_column('notification', 'event_class')
    op.drop_column('notification', 'event_ack')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('notification',
                  sa.Column('event_ack', sa.Boolean(), nullable=True))
    op.add_column('notification',
                  sa.Column('event_class', sa.String(length=32),
                            nullable=True))
    op.add_column('notification',
                  sa.Column('event_object_id', sa.String(length=36),
                            nullable=True))
    op.add_column('notification',
                  sa.Column('event_object_type', sa.String(length=64),
                            nullable=True))
    op.add_column('notification',
                  sa.Column('event_level', sa.String(length=64),
                            nullable=True))
    op.drop_table('filter_criteria')
    op.drop_table('field')
    # ### end Alembic commands ###