class AuthService {
    authorize(username, password) {
        // ...
    }
}

class EmailService {
    send(to, subject, body) {
        // ...
    }
}

class NetworkServiceFacade {
    constructor() {
      this.authService = new AuthService();
      this.emailService = new EmailService();
    }
  
    login(username, password) {
      return this.authService.authorize(username, password);
    }
  
    sendEmail(to, subject, body) {
      return this.emailService.send(to, subject, body);
    }
  }
  
  const networkService = new NetworkServiceFacade();
  
  networkService.login('jan', 'password123');
  networkService.sendEmail('klient@example.com', 'Nowa oferta', 'Zapraszamy do zapoznania się z naszą nową ofertą!');
  