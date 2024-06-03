#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ['tornado==6.3.3', 'requests==2.31.0']

setup(name='opticloud-exceptions',
      description='OptiCloud Exceptions',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'opticloud_exceptions': ''},
      packages=['opticloud_exceptions'],
      install_requires=requirements,
      )
