<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name')->after('password');
            $table->string('email')->after('name');
            $table->string('telephone')->after('email');
            $table->string('venueType')->nullable()->after('telephone');
            $table->date('bookingDate')->nullable()->after('venueType');
            $table->integer('bookingHours')->nullable()->after('bookingDate');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
