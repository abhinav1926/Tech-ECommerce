import { useState } from 'react';
import {
    Layout,
    Users,
    Award,
    FileText,
    Trophy,
    Zap,
    Search,
    PlayCircle,
    Clock,
    LogOut,
    Share2,
    Download,
    Calendar,
    Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    // Mock Data
    const enrolledCourse = {
        title: 'MERN Stack Web Development',
        subtitle: 'Module 4: Authentication & Security',
        progress: 91,
        date: '13th Aug 2025'
    };

    const streak = 12;

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <DashboardHome enrolledCourse={enrolledCourse} streak={streak} />;
            case 'refer':
                return <ReferAndEarn />;
            case 'certificate':
                return <Certificates />;
            case 'resume':
                return <BuildResume />;
            case 'buildathon':
                return <Buildathon />;
            default:
                return <DashboardHome enrolledCourse={enrolledCourse} streak={streak} />;
        }
    };

    return (
        <div className="flex min-h-screen bg-[#FDF8FF] font-sans selection:bg-purple-200">

            {/* Sidebar */}
            <aside className="w-72 bg-white/80 backdrop-blur-xl border-r border-purple-100 flex flex-col fixed h-full z-20 hidden md:flex transition-all duration-300">
                <div className="p-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-200">
                        E
                    </div>
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        EduTech
                    </span>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <SidebarItem
                        icon={<Layout size={22} />}
                        label="Dashboard"
                        active={activeTab === 'dashboard'}
                        onClick={() => setActiveTab('dashboard')}
                    />
                    <SidebarItem
                        icon={<Users size={22} />}
                        label="Refer and Earn"
                        active={activeTab === 'refer'}
                        onClick={() => setActiveTab('refer')}
                    />
                    <SidebarItem
                        icon={<Award size={22} />}
                        label="Certificate"
                        active={activeTab === 'certificate'}
                        onClick={() => setActiveTab('certificate')}
                    />
                    <SidebarItem
                        icon={<FileText size={22} />}
                        label="Build Resume"
                        active={activeTab === 'resume'}
                        onClick={() => setActiveTab('resume')}
                    />
                    <SidebarItem
                        icon={<Trophy size={22} />}
                        label="Buildathon"
                        active={activeTab === 'buildathon'}
                        onClick={() => setActiveTab('buildathon')}
                    />
                </nav>

                <div className="p-6">
                    <button onClick={() => navigate('/')} className="flex items-center gap-3 text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all w-full px-5 py-3 rounded-2xl font-semibold group">
                        <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-72 p-6 md:p-10 overflow-y-auto w-full">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {activeTab === 'dashboard' && 'Welcome back, Student! 👋'}
                            {activeTab === 'refer' && 'Refer & Earn 💰'}
                            {activeTab === 'certificate' && 'Your Achievements 🏆'}
                            {activeTab === 'resume' && 'Resume Builder 📄'}
                            {activeTab === 'buildathon' && 'Hackathons & Events 🚀'}
                        </h1>
                        <p className="text-gray-500 mt-1 font-medium">Let's keep learning and growing.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full p-0.5 shadow-lg shadow-purple-200">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-purple-700 font-bold text-lg">S</div>
                        </div>
                    </div>
                </header>

                {renderContent()}
            </main>
        </div>
    );
};

// --- Sub Components ---

const DashboardHome = ({ enrolledCourse, streak }) => (
    <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
        <div className="flex-1 space-y-8">
            {/* Promo Banners */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300 group">
                    <div className="relative z-10">
                        <span className="bg-white/20 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold mb-4 inline-block uppercase tracking-wider">Limited Offer</span>
                        <h3 className="text-2xl font-bold mb-3 leading-tight">Master MERN Stack with 62% OFF</h3>
                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-3xl font-extrabold text-yellow-300">₹ 799</span>
                            <span className="text-lg opacity-60 line-through decoration-white/50">₹ 2199</span>
                        </div>
                        <button className="bg-white text-purple-700 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group-hover:gap-3">
                            Explore Now <span className="transition-all">→</span>
                        </button>
                    </div>
                    <div className="absolute right-[-20px] bottom-[-40px] opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <Award size={180} />
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 text-gray-800 relative overflow-hidden shadow-lg border border-purple-50 hover:border-purple-200 transition-all hover:scale-[1.02] duration-300 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-bl-full opacity-50"></div>
                    <div className="relative z-10">
                        <span className="bg-pink-100 text-pink-700 px-3 py-1.5 rounded-lg text-xs font-bold mb-4 inline-block uppercase tracking-wider">All Access</span>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">Accelerate with All Access Pack</h3>
                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-3xl font-extrabold text-purple-600">₹ 3299</span>
                            <span className="text-lg text-gray-400 line-through">₹ 3799</span>
                        </div>
                        <button className="bg-purple-50 text-purple-700 border border-purple-100 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-purple-100 transition-all">View Details</button>
                    </div>
                </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-purple-50/50">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Active Courses</h2>
                    <div className="relative w-72">
                        <input type="text" placeholder="Find your course..." className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-purple-300 focus:ring-4 focus:ring-purple-50/50 transition-all text-sm outline-none font-medium" />
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>

                <div className="group border border-gray-100 hover:border-purple-200 bg-white rounded-3xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-50">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-400 to-emerald-600"></div>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-gray-200">
                            <span className="font-extrabold text-xl">JS</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-900 mb-2">{enrolledCourse.title}</h3>
                            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full w-fit">
                                <PlayCircle size={14} className="text-purple-500" />
                                <span>{enrolledCourse.subtitle}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <button className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                                Continue <PlayCircle size={18} className="fill-white/20" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-6 bg-gray-50/50 p-3 rounded-xl border border-dotted border-gray-200">
                        <Clock size={14} className="text-gray-400" />
                        <span>Last accessed 2 days ago</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <span>Valid till Dec 2026</span>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm font-bold mb-2.5">
                            <span className="text-gray-600">Course Progress</span>
                            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100">{enrolledCourse.progress}% Completed</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden p-0.5">
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-sm relative" style={{ width: `${enrolledCourse.progress}%` }}>
                                <div className="absolute right-0 top-0 h-full w-full bg-white/20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Widgets */}
        <div className="hidden lg:block w-96 space-y-8">
            {/* Streak */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-purple-50/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                        <div className="text-xs text-orange-600 bg-orange-100 px-3 py-1 rounded-full font-bold uppercase inline-flex items-center gap-1.5 mb-2">
                            <Zap size={14} className="fill-orange-500" /> On Fire!
                        </div>
                        <div className="text-5xl font-black text-gray-900 tracking-tight mt-2">{streak}</div>
                        <div className="text-gray-400 font-medium text-sm mt-1">Daily Streak</div>
                    </div>
                    <div className="text-right">
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-2">
                            <Trophy size={22} className="fill-orange-200" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group/day cursor-default">
                            <span className="text-xs text-gray-400 font-bold group-hover/day:text-purple-500 transition-colors">{day}</span>
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${i < 4 ? 'bg-gradient-to-b from-orange-400 to-red-500 text-white shadow-lg shadow-orange-200 scale-100' : 'bg-gray-50 text-gray-300'}`}>
                                {i < 4 && <Zap size={16} className="fill-white" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-gradient-to-b from-white to-purple-50/30 rounded-[2rem] p-8 shadow-sm border border-purple-50/50 h-[500px] relative">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-xl text-gray-900">Top Learners</h3>
                    <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
                        <button className="px-4 py-1.5 text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">Weekly</button>
                        <button className="px-4 py-1.5 text-xs font-bold bg-purple-600 text-white rounded-lg shadow-md">All Time</button>
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { name: 'Alex Johnson', xp: '24k', rank: 1, img: 'bg-blue-100 text-blue-600' },
                        { name: 'Sarah Williams', xp: '21k', rank: 2, img: 'bg-pink-100 text-pink-600' },
                        { name: 'Mike Brown', xp: '18k', rank: 3, img: 'bg-green-100 text-green-600' },
                        { name: 'Emily Davis', xp: '15k', rank: 4, img: 'bg-yellow-100 text-yellow-600' },
                    ].map((user) => (
                        <div key={user.rank} className="flex items-center gap-4 p-3 hover:bg-white hover:shadow-md rounded-2xl transition-all cursor-default border border-transparent hover:border-purple-50">
                            <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-lg ${user.rank <= 3 ? 'text-gray-900' : 'text-gray-400'}`}>
                                #{user.rank}
                            </div>
                            <div className={`w-10 h-10 ${user.img} rounded-full flex items-center justify-center font-bold`}>
                                {user.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm text-gray-900">{user.name}</h4>
                                <div className="text-xs text-purple-500 font-medium">{user.xp} XP</div>
                            </div>
                            {user.rank === 1 && <Trophy size={20} className="text-yellow-400 fill-yellow-400" />}
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="bg-purple-600 text-white rounded-2xl p-4 shadow-xl shadow-purple-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold border-2 border-white/30">You</div>
                            <div>
                                <div className="font-bold">Your Rank</div>
                                <div className="text-xs text-purple-200">Keep pushing!</div>
                            </div>
                        </div>
                        <div className="text-2xl font-black">#42</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ReferAndEarn = () => (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-center text-white mb-10 shadow-xl shadow-purple-200">
            <h2 className="text-4xl font-extrabold mb-4">Invite & Earn ₹500</h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Help your friends kickstart their career. Give them 20% off and earn ₹500 for every varied enrollment.</p>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-sm mx-auto border border-white/20">
                <div className="text-xs text-purple-200 uppercase tracking-widest font-bold mb-2">Your Referral Code</div>
                <div className="text-3xl font-mono font-bold tracking-wider mb-4">EDUTECH20</div>
                <div className="flex gap-4">
                    <button className="flex-1 bg-white text-purple-700 py-3 rounded-xl font-bold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                        <Share2 size={18} /> Share
                    </button>
                    <button className="flex-1 bg-purple-800/50 text-white py-3 rounded-xl font-bold hover:bg-purple-800/70 transition-colors border border-purple-400/30">
                        Copy
                    </button>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-dashed border-gray-300 text-center text-gray-400 flex flex-col items-center justify-center gap-3 min-h-[200px]">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                        <Users size={20} />
                    </div>
                    <span>Referral slot empty</span>
                </div>
            ))}
        </div>
    </div>
);

const Certificates = () => (
    <div className="max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gray-900 rounded-[1.2rem] h-48 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 text-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20">
                        <Award size={32} className="text-yellow-400" />
                    </div>
                    <h3 className="font-bold text-xl mb-1">MERN Stack Developer</h3>
                    <p className="text-gray-400 text-sm">Issued Dec 20, 2025</p>
                </div>
                <div className="p-6">
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        This certifies that the student has successfully completed the comprehensive Full Stack Development bootcamp with distinction.
                    </p>
                    <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors group-hover:scale-[1.02]">
                        <Download size={20} /> Download PDF
                    </button>
                </div>
            </div>

            {/* Locked State */}
            <div className="bg-gray-50 rounded-3xl p-8 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center opacity-75 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-400">
                    <Award size={40} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Data Science Master</h3>
                <p className="text-gray-500 mb-6 max-w-xs">Complete 60% more of the course to unlock your certificate of completion.</p>
                <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div className="w-[40%] h-full bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-gray-500">40% Completed</span>
            </div>
        </div>
    </div>
);

const BuildResume = () => (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <FileText className="text-purple-600" /> Builder Profile
                </h2>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Role Title</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="Full Stack Developer" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Professional Summary</label>
                        <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all h-32" placeholder="Briefly describe your experience..."></textarea>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Skills (Comma separated)</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-purple-200 outline-none transition-all" placeholder="React, Node.js, Python..." />
                    </div>

                    <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-lg shadow-purple-200 transition-all">Save Profile</button>
                </form>
            </div>

            <div className="space-y-6">
                <div className="bg-blue-600 rounded-3xl p-6 text-white text-center">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold text-xl mb-2">AI Resume Check</h3>
                    <p className="text-sm opacity-80 mb-6">Get your resume reviewed by our AI to increase your ATS score.</p>
                    <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Analyze Now</button>
                </div>

                <div className="bg-gray-900 rounded-3xl p-6 text-white text-center">
                    <Download className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold text-xl mb-2">Download Resume</h3>
                    <p className="text-sm opacity-80 mb-6">Export your profile as a professionally formatted PDF.</p>
                    <button className="w-full bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">Export PDF</button>
                </div>
            </div>
        </div>
    </div>
);

const Buildathon = () => (
    <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-end justify-between mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Hackathons</h2>
                <p className="text-gray-500">Compete, build, and win exciting prizes.</p>
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-bold text-sm">All</button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-bold text-sm border hover:bg-gray-50">Web3</button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg font-bold text-sm border hover:bg-gray-50">AI/ML</button>
            </div>
        </div>

        <div className="grid gap-6">
            {[
                { title: 'Global AI Challenge 2025', date: 'Jan 15 - Jan 17', prize: '$10,000', tags: ['AI', 'Python'], color: 'from-blue-500 to-cyan-500' },
                { title: 'Web3 Builders Summit', date: 'Feb 01 - Feb 03', prize: '$25,000', tags: ['Blockchain', 'Solidity'], color: 'from-purple-500 to-pink-500' },
                { title: 'Green Tech Innovation', date: 'Feb 20 - Feb 22', prize: '$5,000', tags: ['IoT', 'Hardware'], color: 'from-emerald-500 to-green-500' },
            ].map((hack, i) => (
                <div key={i} className="group bg-white rounded-3xl p-2 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
                    <div className={`w-full md:w-64 h-48 md:h-40 rounded-[1.2rem] bg-gradient-to-br ${hack.color} flex flex-col items-center justify-center text-white relative overflow-hidden shrink-0`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        <Trophy size={40} className="mb-2 relative z-10" />
                        <span className="font-bold relative z-10">{hack.prize} Pool</span>
                    </div>

                    <div className="flex-1 p-4 md:p-0 w-full">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {hack.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 uppercase tracking-wide">{tag}</span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{hack.title}</h3>
                        <div className="flex items-center gap-2 text-gray-500 font-medium mb-6">
                            <Calendar size={18} />
                            <span>{hack.date} • Online</span>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-8 py-2.5 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all">Register Now</button>
                            <button className="px-6 py-2.5 text-gray-600 font-bold hover:bg-gray-50 rounded-xl transition-all">Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const SidebarItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
      ${active
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-200'
                : 'text-gray-500 hover:bg-purple-50 hover:text-purple-600'
            }`}
    >
        <div className={`relative z-10 ${active ? 'text-white' : 'text-gray-400 group-hover:text-purple-600 transition-colors'}`}>
            {icon}
        </div>
        <span className="font-bold relative z-10">{label}</span>
    </button>
);

export default Dashboard;
