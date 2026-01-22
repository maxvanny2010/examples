import {LoginForm} from "@/components";

export default function LoginPage() {
    return (
        <div style={pageWrapper}>
            <div style={card}>
                <LoginForm/>
            </div>
        </div>
    );
}

const pageWrapper = {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
};

const card = {
    width: 380,
    padding: 32,
    borderRadius: 12,
    background: '#fff',
};
