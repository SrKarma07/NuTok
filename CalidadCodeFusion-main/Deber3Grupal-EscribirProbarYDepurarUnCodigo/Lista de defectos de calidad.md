# Lista de defectos de calidad
## Defectos de calidad encontrados en pruebas exploratorias individuales
### Defectos de funcionalidad:
- La traducción de los número del 10 al 19 no es exacta, esto también ocurre con la centenas, decenas y miles que empiezan en 1. Al principio de cada traducción se añade la palabra shuk a la traducción. El resto de la traducción es pertinente.

### Defectos no funcionales:
-	Usabilidad: Se recomienda proporcionar mensajes de error más descriptivos y precisos que indiquen claramente el problema. Por ejemplo, cuando se ingresa un número negativo, se podría mostrar un mensaje de error como “El número ingresado es negativo. Por favor, ingrese un número válido (0-9999)”. Del mismo modo, cuando se ingresan letras en lugar de números, se podría mostrar un mensaje como “Se han ingresado caracteres no numéricos. Por favor, ingrese un número válido (0-9999)”.
-	Usabilidad: No se realiza una validación en tiempo real mientras el usuario escribe en el campo de entrada. Sería beneficioso proporcionar retroalimentación en tiempo real para resaltar cualquier error o información incorrecta ingresada antes de hacer clic en el botón “Traducir”.
-	Legibilidad del código: Uso de comentarios para explicar partes importantes del código. Esto puede dificultar la comprensión y el mantenimiento del código en el futuro.
-	Mantenibilidad: Se recomienda mejorar la estructuración del código mediante la aplicación de técnicas y mejores prácticas de programación. Sería beneficioso refactorizar el código en funciones separadas para mejorar la legibilidad, mantenibilidad y escalabilidad del código, facilitando así su mantenimiento y futuras modificaciones.
