#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(
    name="katara-client",
    description="Katara Client",
    url="",
    author="CIPE",
    author_email="",
    package_dir={"katara_client": ""},
    packages=["katara_client"],
    install_requires=requirements,
)
