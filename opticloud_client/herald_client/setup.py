#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='herald-client',
      description='OptiCloud Herald Client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'herald_client': ''},
      packages=['herald_client'],
      install_requires=requirements,
      )
