<?php

    class Person{
        
        //Atributos
        protected $name;
        protected $age;
        protected $email;

        /**
         * Constructor de la clase Persona.
         * 
         * @param string $name El nombre de la persona.
         * @param int $age La edad de la persona.
         * @param string $email El correo electrónico de la persona.
         * 
         */
        public function __construct(string $name, int $age, string $email){

            $this->name = $name;
            $this->age = $age;
            $this->email = $email;

        }

        /**
         * Muestra toda la informacion de la persona.
         */
        public function showInformation(){

            echo "Nombre: " . $this->name . "<br>";
            echo "Edad: " . $this->age . "<br>";
            echo "Email: " . $this->email . "<br>";
        }
        
        /**
         * Devuelve si la persina es mayor de edad.
         * 
         * @return bool devuelve true si es mayor de edad, false si no.
         * 
         */
        public function isAdult(){

            return $this->age>=18;

        }

        //Añadido los metodos Setter
        /**
         * Establece el nombre de la persona.
         *
         * @param string $name El nuevo nombre de la persona.
         */
        public function setName(string $name) {
            $this->name = $name;
        }

        /**
         * Establece la edad de la persona.
         *
         * @param int $age La nueva edad de la persona.
         */
        public function setAge(int $age) {
            $this->age = $age;
        }

        /**
         * Establece el email de la persona.
         *
         * @param string $email El nuevo email de la persona.
         */
        public function setEmail(string $email) {
            $this->email = $email;
        }

        //Añadido los metodos Getter
        /**
         * Devuelve el nombre de la persona.
         *
         * @return string El nombre de la persona.
         */
        public function getName(): string {
            return $this->name;
        }

        /**
         * Devuelve la edad de la persona.
         *
         * @return int La edad de la persona.
         */
        public function getAge(): int {
            return $this->age;
        }

        /**
         * Devuelve el email de la persona.
         *
         * @return string El correo electrónico de la persona.
         */
        public function getEmail(): string {
            return $this->email;
        }


    }











?>