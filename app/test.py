#!/usr/bin/env python3
import requests
import subprocess

def test_create():
  r = requests.get("http://localhost:3000/")
  assert r.text == "Hello world 2!"

if __name__ == "__main__":
  subprocess.run(["python3", "-m", "pytest", __file__])
