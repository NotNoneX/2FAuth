<?php

namespace Tests\Unit\Listeners\Authentication;

use App\Listeners\Authentication\LoginListener;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Event;
use PHPUnit\Framework\Attributes\CoversClass;
use Tests\TestCase;

/**
 * LoginListenerTest test class
 */
#[CoversClass(LoginListener::class)]
class LoginListenerTest extends TestCase
{
    /**
     * @test
     */
    public function test_LoginListener_listen_to_Login_event()
    {
        Event::fake();

        Event::assertListening(
            Login::class,
            LoginListener::class
        );
    }
}
