#!/usr/bin/python           # This is client.py file

import socket               # Import socket module

s = socket.socket()         # Create a socket object
host = "192.168.1.0" # Get local machine name
port = 12334                # Reserve a port for your service.

s.connect((host, port))
print(s.recv(1024))
s.close()
