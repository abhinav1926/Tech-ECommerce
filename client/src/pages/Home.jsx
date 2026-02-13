import { useState, useEffect } from 'react';
import { Search, MapPin, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_COURSES = [
    { id: 1, title: 'Complete Web Development Bootcamp', category: 'btech', rating: 4.8, students: 2500, price: '₹4,999', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Data Structures & Algorithms in Java', category: 'btech', rating: 4.9, students: 1800, price: '₹3,499', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Class 12 Physics: Electrostatics', category: '12th', rating: 4.7, students: 5000, price: '₹999', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'B.Sc Mathematics: Linear Algebra', category: 'bsc', rating: 4.6, students: 1200, price: '₹1,499', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Machine Learning A-Z', category: 'btech', rating: 4.8, students: 3000, price: '₹5,999', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Class 10 Math: Trigonometry', category: '10th', rating: 4.5, students: 8000, price: '₹499', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800' },
];

const Home = () => {
    const [interest, setInterest] = useState('all');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user.interest) {
            setInterest(user.interest);
        }
    }, []);

    const filteredCourses = MOCK_COURSES.filter(course => {
        const matchesCategory = interest === 'all' || course.category === interest || interest === 'other'; // Simplified logic
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // If no courses found for specific category, show all or recommendations
    const displayCourses = filteredCourses.length > 0 ? filteredCourses : MOCK_COURSES;

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Unlock Your <span className="text-yellow-400">Potential</span> <br />
                        With Expert-Led Courses
                    </h1>
                    <p className="text-blue-100 text-lg mb-8 max-w-xl">
                        Tailored learning paths for {interest !== 'all' ? <span className="font-bold text-white uppercase">{interest}</span> : 'Students'}.
                        Start learning today.
                    </p>

                    <div className="bg-white p-2 rounded-2xl shadow-lg max-w-2xl flex items-center">
                        <Search className="text-gray-400 ml-4" size={24} />
                        <input
                            type="text"
                            placeholder="Search for courses, topics, or exams..."
                            className="flex-1 px-4 py-3 outline-none text-gray-700 text-lg placeholder-gray-400"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
            </section>

            {/* Courses Grid */}
            <section>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
                        <p className="text-gray-500 mt-1">Based on your interest in <span className="font-semibold text-blue-600 uppercase">{interest}</span></p>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayCourses.map(course => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-blue-800">
                                    {course.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                                    <span className="font-bold text-gray-900">{course.rating}</span>
                                    <span className="text-gray-400 text-sm">({course.students})</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>

                                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>12h 30m</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>English</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                                    <button
                                        onClick={() => navigate(`/course/${course.id}`)}
                                        className="px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
