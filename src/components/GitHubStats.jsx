import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const GitHubStats = () => {
    const githubUsername = "Itz-snj"; // Replace with your actual GitHub username

    return (
        <div className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mx-auto max-w-4xl"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent"
                >
                    GitHub Activity
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col space-y-4">
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&text_color=ffffff&icon_color=ffffff&title_color=ffffff`}
                                alt="GitHub Stats"
                                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                            <img
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=00000000&stroke=ffffff&ring=ffffff&fire=ffffff&currStreakLabel=ffffff`}
                                alt="GitHub Streak"
                                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    </motion.div>

                    {/* Most Used Languages & Follow Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&text_color=ffffff&title_color=ffffff`}
                            alt="Most Used Languages"
                            className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                        />

                        {/* Follow Button */}
                        <div className="flex flex-col space-y-4">
                            <motion.a
                                href={`https://github.com/${githubUsername}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-600"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="text-2xl" />
                                <span className="text-lg">Follow me on GitHub</span>
                                <FaExternalLinkAlt className="text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            <div className="text-center text-stone-400 text-sm">
                                <p>Check out my repositories and contributions</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* GitHub Activity Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8"
                >
                    <img
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=00000000&color=ffffff&line=ffffff&point=ffffff&area_color=ffffff&area=true`}
                        alt="GitHub Activity Graph"
                        className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default GitHubStats;
