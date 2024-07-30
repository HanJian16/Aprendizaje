<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    // Ayuda a definir la tabla que corresponde a este modelo, usualmente viene por defecto
    protected $table = 'notes';

    // Define los campos que se podran modificar a traves del modelo, de esta manera protegemos los campos que no queremos se modifquen accidentalmente
    protected $fillable = ["title", "description", "deadline", "done"];

    // Lo opuesto a $fillable, define los campos que no se pueden modificar a traves del modelo, no es necesario ponerlos si ya tienes un fillable o viceversa.

    // protected $guarded = [];

    // Para definir el tipo de dato que nos debe venir en algun campo en especifico
    protected $casts = [
        "deadline" => "date",
    ];

    // Define que campos no queremos que se muestren cuando se serializan los datos, por ejemplo el campo password cuando entregamos los datos por medio de una api, etc.
    
    // protected $hidden = ['password'];
}
