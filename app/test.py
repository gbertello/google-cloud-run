#!/usr/bin/env python3
import requests
import subprocess

def test_create():
  r = requests.get("https://google-cloud-run-6srdkn7lia-uc.a.run.app")
  assert r.text == "Hello world again!"

if __name__ == "__main__":
  subprocess.run(["python3", "-m", "pytest", __file__])