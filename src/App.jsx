import React, { useState, useEffect } from 'react';
import MarkdownRenderer from './components/MarkdownRenderer';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    // Fetch list of articles from the content/blog directory
    const fetchArticles = async () => {
      try {
        // For now, we'll manually list articles
        // In a real implementation, you'd have a manifest or API endpoint
        const articleList = [
          { id: 'test-article', title: 'Test Article', path: '/content/blog/test-article.md' }
        ];
        setArticles(articleList);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome to My Blog</h1>
      <p>This is a simple React application deployed on Vercel.</p>
      <p>Markdown articles will be automatically published here when uploaded to GitHub.</p>
      
      {articles.length > 0 && (
        <div>
          <h2>Articles</h2>
          <ul>
            {articles.map(article => (
              <li key={article.id}>
                <button 
                  onClick={() => setSelectedArticle(article)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'blue', 
                    textDecoration: 'underline', 
                    cursor: 'pointer' 
                  }}
                >
                  {article.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedArticle && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px' }}>
          <h2>{selectedArticle.title}</h2>
          <MarkdownRenderer filePath={selectedArticle.path} />
          <button 
            onClick={() => setSelectedArticle(null)}
            style={{ marginTop: '20px', padding: '10px 20px' }}
          >
            Back to Articles
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

