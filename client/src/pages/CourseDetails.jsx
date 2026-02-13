import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, MapPin, CheckCircle, User, Award, BookOpen, ThumbsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

// MOCK DATA (In a real app, fetch from API)
const ALL_COURSES = [
    {
        id: 1,
        title: 'Complete Web Development Bootcamp',
        category: 'btech',
        rating: 4.8,
        students: 2500,
        price: '₹4,999',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
        description: 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
        features: ['Build 16 web development projects', 'After this course you will be able to build ANY website you want', 'Work as a freelance web developer'],
        reviews: [
            { user: 'Rahul K.', rating: 5, comment: 'Changed my career path completely. Excellent content!', date: '2 days ago' },
            { user: 'Sneha P.', rating: 4, comment: 'Great for beginners, but the React section is a bit fast.', date: '1 week ago' }
        ]
    },
    { id: 2, title: 'Data Structures & Algorithms in Java', category: 'btech', rating: 4.9, students: 1800, price: '₹3,499', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', description: 'Master DSA to crack interviews at top tech companies.', features: [], reviews: [] },
    { id: 3, title: 'Class 12 Physics: Electrostatics', category: '12th', rating: 4.7, students: 5000, price: '₹999', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800', description: 'Complete guide to Electrostatics for board exams and JEE/NEET.', features: [], reviews: [] },
    { id: 4, title: 'B.Sc Mathematics: Linear Algebra', category: 'bsc', rating: 4.6, students: 1200, price: '₹1,499', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800', description: 'Deep dive into vector spaces, matrices and linear transformations.', features: [], reviews: [] },
    { id: 5, title: 'Machine Learning A-Z', category: 'btech', rating: 4.8, students: 3000, price: '₹5,999', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800', description: 'Hands-on Python & R In Data Science, Machine Learning & Deep Learning.', features: [], reviews: [] },
    { id: 6, title: 'Class 10 Math: Trigonometry', category: '10th', rating: 4.5, students: 8000, price: '₹499', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800', description: 'Master Trigonometry with easy visualization techniques.', features: [], reviews: [] },
];

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Simulate API fetch
        const found = ALL_COURSES.find(c => c.id === parseInt(id));
        setCourse(found || ALL_COURSES[0]); // Fallback to first if not found
        window.scrollTo(0, 0);
    }, [id]);

    if (!course) return <div>Loading...</div>;

    const similarCourses = ALL_COURSES.filter(c => c.category === course.category && c.id !== course.id).slice(0, 3);

    return (
        <div className="pb-20">
            {/* Header Banner */}
            <div className="bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={course.image} className="w-full h-full object-cover opacity-20 blur-sm" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
                            <span className="bg-blue-600/20 px-3 py-1 rounded-full">{course.category}</span>
                            <span>• Last Updated Dec 2025</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{course.title}</h1>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">{course.description}</p>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <span className="text-lg font-bold">{course.rating}</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={i < Math.floor(course.rating) ? "fill-current" : "text-gray-600"} />
                                    ))}
                                </div>
                                <span className="text-gray-400 ml-1">({course.reviews?.length || 120} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>{course.students.toLocaleString()} students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>15 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Why this course */}
                    <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Award className="text-blue-600" /> Why take this course?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {course.features && course.features.length > 0 ? course.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            )) : (
                                <>
                                    <div className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1" size={20} /><span className="text-gray-700">Learn from industry experts with real-world experience.</span></div>
                                    <div className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1" size={20} /><span className="text-gray-700">Lifetime access to course materials and updates.</span></div>
                                    <div className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1" size={20} /><span className="text-gray-700">Certificate of completion to boost your resume.</span></div>
                                    <div className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1" size={20} /><span className="text-gray-700">Hands-on projects to build your portfolio.</span></div>
                                </>
                            )}
                        </div>
                    </section>

                    {/* Description */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Description</h2>
                        <div className="prose max-w-none text-gray-600 leading-relaxed">
                            <p className="mb-4">This comprehensive course covers everything you need to know about {course.title}. Whether you are a beginner or looking to advance your skills, this curriculum is designed to take you from basics to advanced concepts.</p>
                            <p>We believe in learning by doing. Throughout this course, you will work on multiple practical projects that simulate real-world scenarios. By the end, you will have the confidence to apply your knowledge professionally.</p>
                        </div>
                    </section>

                    {/* Reviews */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Student Feedback</h2>
                        <div className="grid gap-6">
                            {course.reviews && course.reviews.length > 0 ? course.reviews.map((review, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                                {review.user.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{review.user}</h4>
                                                <div className="flex text-yellow-400 text-xs">
                                                    {[...Array(5)].map((_, r) => (
                                                        <Star key={r} size={12} className={r < review.rating ? "fill-current" : "text-gray-300"} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-sm">{review.date}</span>
                                    </div>
                                    <p className="text-gray-600 italic">"{review.comment}"</p>
                                </div>
                            )) : (
                                <div className="text-center py-8 bg-gray-50 rounded-xl text-gray-500">
                                    No reviews yet for this course. Be the first!
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Sidebar / Recommended */}
                <div className="space-y-8">
                    {/* Enrollment Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 sticky top-24">
                        <div className="text-3xl font-extrabold text-gray-900 mb-2">{course.price}</div>
                        <div className="text-gray-500 line-through text-sm mb-6">Original Price ₹10,999</div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2">
                            Enroll Now <ArrowRight size={20} />
                        </button>
                        <p className="text-center text-xs text-gray-500 mb-6">30-Day Money-Back Guarantee</p>

                        <div className="space-y-3 text-sm text-gray-600">
                            <h3 className="font-bold text-gray-900">This course includes:</h3>
                            <div className="flex items-center gap-3"><BookOpen size={16} className="text-blue-500" /> <span>24 hours on-demand video</span></div>
                            <div className="flex items-center gap-3"><CheckCircle size={16} className="text-blue-500" /> <span>Assignments & Quizzes</span></div>
                            <div className="flex items-center gap-3"><Award size={16} className="text-blue-500" /> <span>Certificate of completion</span></div>
                        </div>
                    </div>

                    {/* Similar Courses */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-4">Similar Courses</h3>
                        <div className="space-y-4">
                            {similarCourses.map(sim => (
                                <div
                                    key={sim.id}
                                    onClick={() => navigate(`/course/${sim.id}`)}
                                    className="group flex gap-3 bg-white p-3 rounded-xl border border-gray-100 hover:shadow-md cursor-pointer transition-all"
                                >
                                    <img src={sim.image} alt="" className="w-20 h-20 rounded-lg object-cover" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">{sim.title}</h4>
                                        <div className="flex items-center gap-1 text-xs text-yellow-500 mt-1">
                                            <Star size={12} className="fill-current" />
                                            <span className="text-gray-600 font-medium">{sim.rating}</span>
                                        </div>
                                        <div className="font-bold text-gray-900 text-sm mt-1">{sim.price}</div>
                                    </div>
                                </div>
                            ))}
                            {similarCourses.length === 0 && <p className="text-gray-500 text-sm">No similar courses found.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Icon
const ArrowRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
    </svg>
);

export default CourseDetails;
