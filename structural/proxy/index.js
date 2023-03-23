class RealSubject {
    request() {
        console.log('RealSubject handles the request.');
    }
}
  
  class ProxySubject {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }
  
    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
        } else {
            console.log('ProxySubject: Access denied.');
        }
    }
  
    checkAccess() {
        return true;
    }
}
  
const realSubject = new RealSubject();
const proxySubject = new ProxySubject(realSubject);

proxySubject.request();