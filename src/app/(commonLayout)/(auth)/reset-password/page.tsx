import LoginForm from '@/components/login-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResetPasswordPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">
                        Reset Password
                    </CardTitle>
                    <CardDescription>
                        Enter your new password to reset your password
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {/* <LoginForm /> */}
                    <h2>This is the Reset Password page</h2>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResetPasswordPage;