"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Award, UserProfile } from "@/types";
import { Edit, Trash2, UserCog, Trophy, Share2 } from "lucide-react";

// Fake data generation with more social media-like details
const generateFakeProfile = (): UserProfile => ({
  id: "user_123",
  name: "김상장",
  email: "kim.sangzang@example.com",
  bio: "Award enthusiast | Dream chaser | Celebrating every milestone 🏆",
  followers: 1234,
  following: 567,
  profileImageUrl: "/images/profile-placeholder.png",
});

const generateFakeAwards = (count: number = 6): Award[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `award_${index + 1}`,
    title: `${["🏆", "🥇", "🎉"][index % 3]} Achievement ${index + 1}`,
    description: `Recognized for outstanding performance in ${
      ["Technology", "Innovation", "Leadership"][index % 3]
    }. A testament to hard work and dedication.`,
    userId: "user_123",
    date: new Date(2023, index, 15).toLocaleDateString(),
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [awards, setAwards] = useState<Award[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  // Simulate data fetching
  useEffect(() => {
    try {
      const fakeProfile = generateFakeProfile();
      const fakeAwards = generateFakeAwards();

      setProfile(fakeProfile);
      setAwards(fakeAwards);
    } catch (error) {
      console.error("Error generating fake data:", error);
    }
  }, [page]);

  // Handle profile update
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    try {
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Handle award deletion
  const handleDeleteAward = async (awardId: string) => {
    try {
      setAwards(awards.filter((award) => award.id !== awardId));
    } catch (error) {
      console.error("Error deleting award:", error);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              {/* <Image 
                src={profile.profileImageUrl} 
                alt={`${profile.name}'s profile`}
                width={120} 
                height={120} 
                className="rounded-full border-4 border-blue-500"
              /> */}
              <button
                onClick={() => setIsEditing(true)}
                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2"
              >
                <UserCog className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <p className="text-gray-600">{profile.bio}</p>
                </div>
              </div>

              <div className="flex space-x-6 mt-4">
                <div className="text-center">
                  <span className="font-bold block">{profile.followers}</span>
                  <span className="text-gray-600">Followers</span>
                </div>
                <div className="text-center">
                  <span className="font-bold block">{profile.following}</span>
                  <span className="text-gray-600">Following</span>
                </div>
                <div className="text-center">
                  <span className="font-bold block">{awards.length}</span>
                  <span className="text-gray-600">Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    {award.title}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => router.push(`/awards/edit/${award.id}`)}
                      className="text-green-500 hover:bg-green-100 p-1 rounded"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteAward(award.id)}
                      className="text-red-500 hover:bg-red-100 p-1 rounded"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{award.description}</p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{award.date}</span>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <Trophy className="mr-1 w-4 h-4" /> {award.likes}
                    </span>
                    <button className="hover:bg-gray-100 p-1 rounded">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {awards.length > 0 && (
          <div className="flex justify-center mt-8">
            <div className="bg-white shadow-md rounded-full px-4 py-2 flex items-center space-x-4">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="text-blue-500 disabled:text-gray-300"
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="text-blue-500 disabled:text-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
