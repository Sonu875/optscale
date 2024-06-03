#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying>=1.3.3"]

setup(
    name="jira-bus-client",
    description="OptiCloud Jira Bus API Client",
    url="",
    author="CIPE",
    author_email="",
    package_dir={"jira_bus_client": ""},
    packages=["jira_bus_client"],
    install_requires=requirements,
)
