import { LoginForm } from '@/components/LoginForm';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@radix-ui/react-select';

type LoginProps = {};

const Login: React.FC<LoginProps> = props => {
	return (
		<div className="max-w-3xl border p-3 container mx-auto">
			<LoginForm />
		</div>
	);
};

export default Login;
