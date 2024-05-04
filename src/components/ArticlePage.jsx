import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  return (
    <Container className="mt-4">
      {article ? (
        <>
          <Helmet>
            <title>{article.title}</title>
            <meta property="og:type" content="article" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={article.imageUrl} />
            <meta property="og:title" content={article.title} />
            <meta property="og:description" content={article.description} />
          </Helmet>
          <Card>
            <Card.Img
              variant="top"
              src={article.imageUrl}
              alt={article.title + " insights"}
            />
            <Card.Body>
              <Card.Title className="text-dark">{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p>Article not found.</p>
      )}
    </Container>
  );
};

export default ArticlePage;
