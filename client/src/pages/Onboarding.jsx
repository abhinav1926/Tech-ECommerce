import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, User, CheckCircle } from 'lucide-react';

const courses = [
    { id: 'btech', label: 'B.Tech', icon: <GraduationCap size={32} /> },
    { id: 'bsc', label: 'B.Sc', icon: <BookOpen size={32} /> },
    { id: 'bba', label: 'BBA', icon: <User size={32} /> },
    { id: '12th', label: 'Class 12', icon: <BookOpen size={32} /> },
    { id: '10th', label: 'Class 10', icon: <BookOpen size={32} /> },
    { id: 'other', label: 'Other', icon: <User size={32} /> },
];

const Onboarding = () => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!selected) return;

        // Save interest to local storage (Mock persistence)
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        user.interest = selected;
        localStorage.setItem('user', JSON.stringify(user));


        navigate('/dashboard');
    };

    return (
        <div className="max-w-4xl mx-auto mt-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What are you studying?</h2>
                <p className="text-xl text-gray-500">
                    We'll personalize your learning experience based on your selection.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {courses.map((course) => (
                    <button
                        key={course.id}
                        onClick={() => setSelected(course.id)}
                        className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all duration-200 group
              ${selected === course.id
                                ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md transform scale-105'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                    >
                        <div className={`p-4 rounded-full ${selected === course.id ? 'bg-blue-200' : 'bg-gray-100 group-hover:bg-white'} transition-colors`}>
                            {course.icon}
                        </div>
                        <span className="font-semibold text-lg">{course.label}</span>
                        {selected === course.id && <CheckCircle size={24} className="text-blue-600 absolute top-4 right-4" />}
                    </button>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleContinue}
                    disabled={!selected}
                    className={`px-12 py-4 rounded-full font-bold text-lg transition-all
            ${selected
                            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Start Learning
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
