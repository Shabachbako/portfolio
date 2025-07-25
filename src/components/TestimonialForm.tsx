import React, { useState } from 'react';
import { X, Upload, Star } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TestimonialForm.css';

interface PraiseFormData {
  facePic: string;
  fanName: string;
  jobTitle: string;
  company: string;
  platform: string;
  dateRange: string;
  praiseTitle: string;
  sweetWords: string;
  starCount: number;
}

interface PraiseBoxProps {
  onSubmit: (data: PraiseFormData) => void;
  onClose: () => void;
}

const PraiseBox: React.FC<PraiseBoxProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<PraiseFormData>({
    facePic: '',
    fanName: '',
    jobTitle: '',
    company: '',
    platform: '',
    dateRange: '',
    praiseTitle: '',
    sweetWords: '',
    starCount: 5
  });

  const [facePreview, setFacePreview] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setFacePreview(result);
        setFormData(prev => ({
          ...prev,
          facePic: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFaceUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFacePreview(url);
    setFormData(prev => ({
      ...prev,
      facePic: url
    }));
  };

  const handleStarChange = (starCount: number) => {
    setFormData(prev => ({
      ...prev,
      starCount
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.facePic) {
      formData.facePic = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face";
    }

    if (startDate && endDate) {
      formData.dateRange = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    }

    setLoading(true);
    setTimeout(() => {
      onSubmit(formData);
      setLoading(false);
      setShowThankYou(true);
    }, 5000);
  };

  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => handleStarChange(i + 1)}
        className={`glow-button ${i < formData.starCount ? 'glowing' : ''}`}
      >
        <Star size={20} />
      </button>
    ));

  return (
    <div className="happy-cloud">
      <div className="praise-box solid-white">
        {loading ? (
          <div className="spinner-overlay">
            <div className="spinner" />
          </div>
        ) : showThankYou ? (
          <div className="thank-you-modal">
            <h2>Thanks for working with us! 😊</h2>
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="cheer-header">
              <h2>Add Happy Words</h2>
              <button onClick={onClose} className="bye-button">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="happy-form">
              <div className="joy-section">
                <div className="face-upload-area">
                  <label className="happy-label">Smiley Face</label>
                  <div className="face-holder">
                    {facePreview ? (
                      <div className="face-show">
                        <img src={facePreview} alt="Preview" />
                      </div>
                    ) : (
                      <div className="empty-face">
                        <Upload size={40} />
                        <span>Add Face</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFaceChange}
                      className="secret-upload"
                    />
                  </div>
                  <div className="face-url-input">
                    <label className="happy-label">Or paste face URL:</label>
                    <input
                      type="url"
                      placeholder="https://happyface.com/smile.jpg"
                      onChange={handleFaceUrlChange}
                      className="happy-input"
                    />
                  </div>
                </div>

                <div className="input-grid">
                  <div className="input-bubble">
                    <label className="happy-label">Name *</label>
                    <input
                      type="text"
                      name="fanName"
                      value={formData.fanName}
                      onChange={handleInputChange}
                      required
                      className="happy-input"
                    />
                  </div>

                  <div className="input-bubble">
                    <label className="happy-label">Fancy Title *</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                      className="happy-input"
                    />
                  </div>

                  <div className="input-bubble">
                    <label className="happy-label">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="happy-input"
                    />
                  </div>

                  <div className="input-bubble">
                    <label className="happy-label">Where From *</label>
                    <input
                      type="text"
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      required
                      className="happy-input"
                    />
                  </div>

                  <div className="input-bubble">
                    <label className="happy-label">Happy Dates *</label>
                    <div className="date-picker-group">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Start Date"
                        className="happy-input"
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="End Date"
                        className="happy-input"
                      />
                    </div>
                  </div>

                  <div className="input-bubble">
                    <label className="happy-label">Praise Title *</label>
                    <input
                      type="text"
                      name="praiseTitle"
                      value={formData.praiseTitle}
                      onChange={handleInputChange}
                      required
                      className="happy-input"
                    />
                  </div>
                </div>

                <div className="input-bubble">
                  <label className="happy-label">Star Rating *</label>
                  <div className="star-party">{renderStars()}</div>
                </div>

                <div className="input-bubble">
                  <label className="happy-label">Sweet Words *</label>
                  <textarea
                    name="sweetWords"
                    value={formData.sweetWords}
                    onChange={handleInputChange}
                    required
                    className="happy-textbox"
                    rows={4}
                  />
                </div>
              </div>

              <div className="button-dance">
                <button type="button" onClick={onClose} className="no-thanks">
                  Maybe Later
                </button>
                <button type="submit" className="send-love">
                  Share Happiness
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PraiseBox;
