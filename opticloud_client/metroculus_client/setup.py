#!/usr/bin/env python
from setuptools import setup


requirements = ["requests==2.31.0", "retrying==1.3.3"]

setup(name='metroculus-client',
      description='Metroculus Client',
      url='',
      author='CIPE',
      author_email='',
      package_dir={'metroculus_client': ''},
      packages=['metroculus_client'],
      install_requires=requirements,
      )