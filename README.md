# Kotprog
This project consists of two elements: A hybrid mobile application and a server wich receives information from the application.
The application has a button, when touched, it starts the rear camera of the phone. When the camera takes a shot, the application 
sends an http post request with the data of the picture (the path of the picure on the phone) to the server. The server simply writes
the received data to the console. In the application, the server's ip adress is "hardwired", so it must be set by changing the variable
called "ip", before installing the app. on the phone.