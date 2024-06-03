#!/usr/bin/env python
import sys
from setuptools import setup


setup(name='config-client',
      description='OptiCloud Config Client',
      author='CIPE',
      url='',
      author_email='',
      package_dir={'config_client': ''},
      install_requires=['python-etcd==0.4.5', 'retrying'],
      packages=['config_client']
      )
