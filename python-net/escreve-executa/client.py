#!/usr/bin/python           # This is client.py file

import socket               # Import socket module


host ="10.42.0.2" # Get local machine name

port = 13378    # Reserve a port for your service.
print(host)

print("proceso iniciado")

#income =s.recv(1024)
#print(income)
#while s.recv(1024).decode('utf-8') != '#start':#
#	income =s.recv(1024).decode('utf-8')#
#	print(income)

saida = True
command = ""
while saida:
	s = socket.socket()         # Create a socket object
	s.connect((host, port))tim mai
	command = input("###")
	print(command)
	s.send( bytes(command, 'utf-8') )
	if command=="quit":
		saida = False
	s.close()                     # Close the socket when do#ne
