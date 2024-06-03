#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='bulldozer-client',
      description='Bulldozer Cluster client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'bulldozer_client': ''},
      packages=['bulldozer_client'],
      install_requires=requirements,
      )
