#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='arcee-client',
      description='Arcee Cluster client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'arcee_client': ''},
      packages=['arcee_client'],
      install_requires=requirements,
      )
