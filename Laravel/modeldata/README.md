Migraciones y Modelos

--- Crea la base de datos ---

    Primero verificas donde tendras tus datos persistentes, puedes ser posgreSQL, MySQL, MariaDB, SQLite, etc.

    Una vez que eliges creas la base de datos, como ejemplo en MySQL o MariaDB usas heidisql para crearla.

    Luego verificas el .env y aseguras correctamente que las variables de la base de datos esten configuradas correctamente.

    Luego el .env usara dichas variables en config/database.php, de hecho alli puedes verificar con cuantas bases de datos puedes conectar a tu servidor.

    Una vez hecho eso es hora de crear las migraciones para crear tus tablas en la base de datos, eso lo hace en el directorio database/migrations, en cada migracion se crea una tabla, y alli se puede crear los campos que necesites para cada tabla.

    Para crear una nueva migracion usas el siguiente comando:

    ### php artisan make:migration create_users_table 

    (puedes reemplazar users con el nombre de tu tabla, pero respeta la convencion de nombres de las tablas, en minusculas, en ingles y en plural)

    Con tus migraciones establecidas puedes usar el siguiente comando para crear las tablas en la base de datos:

    ### php artisan migrate

    En caso de querer hacer modificaciones en una tabla que ya has migrado, nunca debes hacer modificaciones manuales de manera directa en el sistema de persistencia, pues esto creará problemas dado que laravel debe ser completamente agnostico al sistema de persistencia y hacer cambios manuales generará cambios que no han sido registrados por laravel, causando problemas.

    --- Primer metodo para realizar modificaciones en las migraciones ---

    En el caso de querer hacer modificaciones manuales, puedes usar el siguiente comando para retroceder las migraciones:

    ### php artisan migrate:rollback

    Esto funciona asi por que al hacer el migrate, se ejecuta la funcion up en cada migracion, y al hacer rollback, se ejecuta la funcion down.

    En caso de querer retirar todas las migraciones, puedes usar el siguiente comando:

    ### php artisan migrate:reset

    Tambien puedes usar un comandop para borar una migracion en concreto:

    ### php artisan migrate:rollback --batch=3 (despues del igual va el numero del batch especificado)

    Para borrar todas las migraciones y luego volver a ejecutar toda la migracion de nuevo automaticamente:

    ### php artisan migrate:refresh

    --- Segundo metodo para realizar modificaciones en las migraciones ---

    En el caso de que la tabla en cuestion sea una tabla que posee claves foraneas o este en un esquema que al retirarla nos vaya a dar errores podemos usar otro metodo para modificar las migraciones.

    En este caso en vez de borrar y crear una nueva tabla se usaran comando para modificar una tabla.

    Se crea una nueva tabla de migracion con el comando:

    ### php artisan make:migration update_users_table

    Esto nos crea un nuevo archivo de migracion en el que en vez de usar el 'Schema::create' se usa el 'Schema::table'

    Allí se especifica que tabla es la que se quiere modificar y puebes crear nuevos campos o eliminar los que ya nos ons necesarios.

    puedes eliminar campos con la lógicaÑ

    ### $table->dropColumn('column_name');

    No olvidar que el down debe hacer lo inverso al up, es decir borrar los campos que se agregaron y añadir los que se borraron. Esto pierde relevancia si la tabla es borrada en el down de algun otro archivo de migración.

--- Modelos ---

    --- Crear un modelo ---

    Para crear un modelo, usar el siguiente comando:

    ### php artisan make:model Name  
    
    (por convencion comienza con mayuscula, en camel case, en ingles y en singular, y que tenga el nombre correspondiente a la tabla)

    En casos de fuerza mayor en los que no se siguio la convencion de nombres en los comandos para generar los modelos, se le puede decir a laravel con que tabla se debe corresponder dicho modelo, usando el siguiente comando:

    ### protected $table = 'notes'

    Todo modelo requiere de su contraparte en las migraciones, para acortar los pasos puedes usar el commando:

    ### php artisan model:make Name --migration

    Esto creara una migracion para el modelo, y respetara la convencion de nombres.