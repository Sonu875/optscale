#!/usr/bin/env python
import sys
from setuptools import setup

requirements = ['requests==2.31.0', 'SQLAlchemy==1.1.4',
                'opticloud-exceptions==0.0.23', 'netaddr==0.7.18']

setup(name='opticloud-types',
      description='OptiCloud Types',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'opticloud_types': ''},
      packages=['opticloud_types'],
      install_requires=requirements,
      )
