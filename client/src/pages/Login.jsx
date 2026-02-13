import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, ArrowRight, Lock } from 'lucide-react';

const Login = () => {
    const [step, setStep] = useState(1); // 1: Phone, 2: OTP
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (phone.length < 10) return alert('Enter valid phone number');
        // Mock API call
        console.log('OTP sent to', phone);
        alert('Mock OTP sent: 1234');
        setStep(2);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (otp === '1234') {
            // Mock Login Success
            localStorage.setItem('user', JSON.stringify({ phone }));
            navigate('/dashboard');
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-500">
                    {step === 1 ? 'Enter your number to continue' : 'Enter the code sent to your phone'}
                </p>
            </div>

            {step === 1 ? (
                <form onSubmit={handleSendOtp} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="+91 98765 43210"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
                    >
                        Continue <ArrowRight size={20} />
                    </button>
                </form>
            ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all tracking-widest text-lg"
                                placeholder="0 0 0 0"
                                maxLength={4}
                                required
                            />
                        </div>
                        <div className="text-right mt-2">
                            <button type="button" onClick={() => setStep(1)} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                Change Number?
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
                    >
                        Verify & Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default Login;
