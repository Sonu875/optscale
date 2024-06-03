#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='auth-client',
      description='OptiCloud Auth Client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'auth_client': ''},
      packages=['auth_client'],
      install_requires=requirements,
      )
