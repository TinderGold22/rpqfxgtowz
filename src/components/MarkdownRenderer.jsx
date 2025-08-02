import React, { useState, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

const MarkdownRenderer = ({ filePath }) => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const processedContent = await remark().use(html).process(text);
        setMarkdown(processedContent.toString());
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  if (loading) {
    return <div>Loading article...</div>;
  }

  if (error) {
    return <div>Error loading article: {error.message}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default MarkdownRenderer;


