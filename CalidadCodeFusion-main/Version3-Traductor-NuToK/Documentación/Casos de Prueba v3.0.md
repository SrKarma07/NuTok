# Pruebas Unitarias - Traductor NuToK

Fecha: 10 de julio de 2023

## Resumen

En este informe se presentan los resultados de las pruebas unitarias realizadas al programa NuToK. El objetivo de estas pruebas es asegurar que el traductor de números Español-Kichwa funcione correctamente y produzca las salidas esperadas para diferentes casos de entrada. A continuación, se describen los casos de prueba y los resultados obtenidos.

## Caso de prueba 1: Entrada vacía
- Descripción: Se prueba ingresar un campo vacío.
- Entrada: ""
- Salida esperada: "Debes ingresar un número válido"
- Resultado: La prueba es exitosa.

## Caso de prueba 2: Número negativo
- Descripción: Se prueba ingresar un número negativo.
- Entrada: -10
- Salida esperada: "No puedes ingresar un número negativo."
- Resultado: La prueba es exitosa.

## Caso de prueba 3: Número fuera de rango
- Descripción: Se prueba ingresar un número fuera del rango válido (0-9999).
- Entrada: 10010
- Salida esperada: "El número está fuera del rango válido."
- Resultado: La prueba es exitosa.

## Caso de prueba 4: Número decimal
- Descripción: Se prueba ingresar un número decimal.
- Entrada: 10.5
- Salida esperada: "No puedes ingresar un número decimal."
- Resultado: La prueba es exitosa.

## Caso de prueba 5: Número con letras y símbolos
- Descripción: Se prueba ingresar un número con letras y símbolos.
- Entrada: "abc"
- Salida esperada: "No puedes ingresar letras, ni símbolos."
- Resultado: La prueba es exitosa.

## Caso de prueba 6: Número cero
- Descripción: Se prueba ingresar el número cero.
- Entrada: 0
- Salida esperada: "illak"
- Resultado: La prueba es exitosa.

## Caso de prueba 7: Número 9999
- Descripción: Se prueba ingresar el número 9999.
- Entrada: 9999
- Salida esperada: "iskun waranka iskun patsak iskun chunka iskun"
- Resultado: La prueba es exitosa.

## Caso de prueba 8: Número 1
- Descripción: Se prueba ingresar el número 1.
- Entrada: 1
- Salida esperada: "shuk"
- Resultado: La prueba es exitosa.

## Caso de prueba 9: Número 10
- Descripción: Se prueba ingresar el número 10.
- Entrada: 10
- Salida esperada: "chunka"
- Resultado: La prueba es exitosa.

## Caso de prueba 10: Número 11
- Descripción: Se prueba ingresar el número 11.
- Entrada: 11
- Salida esperada: "chunka shuk"
- Resultado: La prueba es exitosa.

## Caso de prueba 11: Número 100
- Descripción: Se prueba ingresar el número 100.
- Entrada: 100
- Salida esperada: "patsak"
- Resultado: La prueba es exitosa.

## Caso de prueba 12: Número 101
- Descripción: Se prueba ingresar el número 101.
- Entrada: 101
- Salida esperada: "patsak shuk"
- Resultado: La prueba es exitosa.

## Caso de prueba 13: Número 1000
- Descripción: Se prueba ingresar el número 1000.
- Entrada: 1000
- Salida esperada: "waranka"
- Resultado: La prueba es exitosa.

## Caso de prueba 14: Número 1001
- Descripción: Se prueba ingresar el número 1001.
- Entrada: 1001
- Salida esperada: "waranka shuk"
- Resultado: La prueba es exitosa.

## Caso de prueba 15: Número 1010
- Descripción: Se prueba ingresar el número 1010.
- Entrada: 1010
- Salida esperada: "waranka chunka"
- Resultado: La prueba es exitosa.

## Caso de prueba 16: Número 1100
- Descripción: Se prueba ingresar el número 1100.
- Entrada: 1100
- Salida esperada: "waranka patsak"
- Resultado: La prueba es exitosa.

## Caso de prueba 17: Número 200
- Descripción: Se prueba ingresar el número 200.
- Entrada: 200
- Salida esperada: "ishkay patsak"
- Resultado: La prueba es exitosa.
