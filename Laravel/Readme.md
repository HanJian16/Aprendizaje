Primeros pasos a la hora de trabajar con Laravel

--- Stack de trabajo
    
    ## Instalar PHP (XAMPP)
        - Se puede instalar mediante XAMPP
        - No oplvidar añadir php a las variables de entorno del PATH para tener acceso desde cualquier consola usualmente será (C:\xampp\php).

    # Instalar un gestor de dependencias (Composer)
        - Esto nos ayudará en la inclusion de más paquetes de desarrollo
        - Composer es el destor de dependencias de Laravel
        - No olvides a;adir al PATH la variable de composer usualmente será (C:\ProgramData\ComposerSetup\bin)
    
    # Instalar un motor de base de datos
        - Se puede usar un motor como MariaDB, PostgresSQL, SLQ Server Mangement, etc.

    # Instalar Node.js
        - Nos será útil para distintos paquetes que lo requeriran en el desarrollo es bueno tenerlo instalado en la versión estable.
    
    # Extensiones para Laravel
        - Laravel-blade-snippets
            - Permite añadir snippets de Laravel en el editor de textos
        - Laravel-blade
        - Laravel-intellisense
        - Laravel-docs

    # Creación de un proyecto
        -Si todavía no lo has hecho, utiliza el comando 'composer global require laravel-installer', esta instrucción solo lo usas una vez en tu computadora.
        ' Ahora puedes crear un proyecto utilizando el comando 'laravel new nombre-del-proyecto'.

--- Patrones de arquitectura
    # MVC
        - Modelo (Entidades)
            - El modelo es el objeto que contiene los datos de la base de datos.
            - Es el encargado de manejar los datos de la base de datos.
        - View (Vistas)
            - Las vistas son las páginas que se muestran al usuario.
            - Es el encargado de mostrar los datos de la base de datos.
        - Controller (Controladores)
            - El controlador es el encargado de manejar las peticiones del usuario.
            - Es el encargado de mostrar las vistas.
        
        (Explicando mas detalladamente)
            - El cliente (Usuario) nos solicita información a través de la ruta de acceso.
            - El sistema va a acceder a un dispatcher router que va a asociar dicha ruta con un controlador.
            - Cada una de las rutas de acceso tiene un controlador asociado.
            - El controlador tiene la lógica de la petición del usuario.
            - El controlador va a llamar a un modelo para obtener los datos de la base de datos.
            - El modelo va a llamar a una base de datos para obtener los datos.
            - El modelo trabaja de forma agnostica al sistema de persistencia (No necesita escribir instrucciones SQL, se maneja de una forma orientada a objetos).
            - Esta fomra de comunicaci con se hace conun ORM esto vinculará el modelo con el sistema de persistencia (base de datos).
            - En el caso de Laravel utiliza por defecto el ORM Eloquent, pero también se puede utilizar otros ORM como Doctrine, Propel, etc.
            - El modelo va a devolver los datos al controlador.
            - El controlador puede mostrar la respuesta principalmente a traves de dos formatos.
                - Si es backend puro, se mostrara la respuesta a traves de una api rest.
                - SI es una estructura FullStack, se mostrara la respuesta a traves de una vista.
                - La vista será una plantilla, por defecto laravel utiliza el modelo de plantillas de blade y se usa para construir un HTML que sea la respuesta.

        Esta es la estructura básica de una aquitectura MVC, pero se le pueden poner añadidos como servicios, middlewares, etc.

            - Middleware
                - El middleware lo colocamos en las peticiiones entre la ruta y el controlador.
                - Es el encargado de realizar algunas tareas antes de que se ejecute el controlador.
                - Por ejemplo, el middleware de autenticación.
            - Observadores
                - Verifican que ocurran diferentes acciones y en funcion de la acción realiza una tarea.
                - Por ejemplo, el observer de la creación de un usuario.