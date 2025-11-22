"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HistoryQuestions() {
  const [history, setHistory] = useState<string[]>([]);
  const [question, setQuestion] = useState("");

  const handleAnswer = () => {
    if (question.trim()) {
      setHistory([...history, question]);
      setQuestion("");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Answer History Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your answer"
        />
        <Button onClick={handleAnswer}>Answer</Button>
        <ul className="space-y-2">
          {history.map((q, i) => (
            <li key={i} className="border rounded p-2">
              {q}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
