#!/usr/bin/env python
import sys
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='report-client',
      description='OptiCloud Report Client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'report_client': ''},
      packages=['report_client'],
      install_requires=requirements,
      )
