<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            CustomerSeeder::class,
<<<<<<< HEAD
            AdminSeeder::class,
=======
            RiderSeeder::class,
            RideSeeder::class,
<<<<<<< HEAD
            ReviewSeeder::class,
            PaymentSeeder::class,
            ManagerSeeder::class
=======
            Review::class
>>>>>>> 74e554f7f9a1ae7ebeb39102c31accb44fd896f3
>>>>>>> 763c36d72cfe7f801979864e7cc5c21d61a9a775
        ]);
    }
}
