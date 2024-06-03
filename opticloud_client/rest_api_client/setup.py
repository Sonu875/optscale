#!/usr/bin/env python
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='restapi-client',
      description='OptiCloud REST API Client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'rest_api_client': ''},
      packages=['rest_api_client'],
      install_requires=requirements,
      )
