#!/usr/bin/env python
import sys
from setuptools import setup

requirements = [
      "requests==2.31.0",
      "retrying>=1.3.3"
]

setup(name='slacker-client',
      description='OptiCloud Slacker API Client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'slacker_client': ''},
      packages=['slacker_client'],
      install_requires=requirements,
      )
