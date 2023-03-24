## [Creational Patterns](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/creational)
- **[Singleton](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/creational/singleton/index.js)** - restricts a class to have only one instance and provides a global point of access to it.
- **[Factory](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/creational/factory/index.js)** - provides a way to create objects without specifying the exact class of object that will be created. Instead, it defines an interface or a base class that other classes can implement or derive from, and the factory class uses this interface or base class to create the appropriate object based on the provided data.
- **[AbstractFactory](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/creational/abstract-factory/index.js)** - works similarly to a regular factory, but we can divide objects into specific families/groups here.
- **[Prototype](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/creational/prototype/index.js)** - a class that can clone itself with the same attributes it already possesses.
- **[Builder](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/creational/builder/index.js)** - allows us to create complex objects by combining functions that change the object's parameters instead of passing them all to the constructor when creating it.

## [Structural Patterns](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural)
- **[Adapter](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/adapter/index.js)** - allows two different objects to have a common functionality.
- **[Decorator](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/decorator/index.js)** - allows modification of the functionality of methods of a given class.
- **[Facade](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/facade/index.js)** - used to connect different classes containing various functionalities into one super class.
- **[Composite](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/composite/index.js)** - allows combining classes into compositions resembling a tree structure on which various functionalities can then be used as on a single object.
- **[Bridge](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/bridge/index.js)** - allows combining the functionality of two separate classes containing different subclasses without affecting them.
- **[Proxy](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/proxy/index.js)** - allows controlling access to other objects and additionally allows executing additional actions before or after the original object's task.
- **[Flyweight](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/structural/flyweight/index.js)** - used to effectively share many instances of objects with the same characteristics to reduce memory usage and improve application performance.

## [Behavioral Patterns](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/behavioral)
- **[Iterator](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/behavioral/iterator/index.js)** - allows iterating over elements of a collection in a universal way, independent of its specific implementation.
- **[ChainofResponsibility](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/behavioral/chain-of-responsibility/index.js)** - allows passing requests from one object to another, creating a chain of handlers in which each object has a chance to handle the request or pass it further down the chain.
- **[Observer](https://github.com/Pabeloszh/design-patterns-wsb-2023/tree/master/behavioral/observer/index.js)** - allows notifying "interested" objects about changes in the state of another object.
