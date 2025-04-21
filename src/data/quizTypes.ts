export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type Technology = 'html' | 'css' | 'javascript';

export interface QuizCategory {
    id: Technology;
    title: string;
    description: string;
    color: string;
    icon: string;
}

export const quizCategories: Record<Technology, QuizCategory> = {
    html: {
        id: 'html',
        title: 'HTML',
        description: 'Master HTML from basic tags to advanced semantic markup',
        color: 'from-orange-400 to-red-600',
        icon: 'html'
    },
    css: {
        id: 'css',
        title: 'CSS',
        description: 'Learn CSS styling from fundamentals to complex layouts',
        color: 'from-blue-400 to-blue-600',
        icon: 'css'
    },
    javascript: {
        id: 'javascript',
        title: 'JavaScript',
        description: 'Explore JavaScript from basics to advanced concepts',
        color: 'from-yellow-400 to-yellow-600',
        icon: 'js'
    }
};

export const difficultyLevels: Record<DifficultyLevel, { title: string; description: string }> = {
    beginner: {
        title: 'Beginner',
        description: 'Perfect for those just starting out'
    },
    intermediate: {
        title: 'Intermediate',
        description: 'For developers with some experience'
    },
    advanced: {
        title: 'Advanced',
        description: 'Challenge yourself with complex concepts'
    }
};
