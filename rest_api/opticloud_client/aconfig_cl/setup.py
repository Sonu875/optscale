#!/usr/bin/env python
import sys
from setuptools import setup


setup(name='aconfig-cl',
      description='OptiCloud Async Config Client Prototype',
      author='CIPE',
      url='',
      author_email='',
      package_dir={'aconfig_cl': ''},
      install_requires=['aiohttp==3.9.3'],
      packages=['aconfig_cl']
      )
