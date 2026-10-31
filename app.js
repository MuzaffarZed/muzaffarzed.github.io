// YouTube Clone Pro - Supreme Enterprise Full-Stack Edition
// Dasturchi: MuzaffarZed - Zero-Defect Standard

(function() {
  const data = window.YT_DATA || { sampleVideos: [], sampleShorts: [], categories: [] };
  const sampleVideos = data.sampleVideos;
  const sampleShorts = data.sampleShorts;
  const categories = data.categories;

  const API_BASE = (window.location.origin && window.location.origin.startsWith("http")) ? window.location.origin : "http://localhost:8000";

  class YouTubeApp {
    constructor() {
      this.videos = this.loadStoredVideos();
      this.shorts = sampleShorts;
      this.currentCategory = 'All';
      this.searchQuery = '';
      this.currentVideo = null;
      this.currentChannel = null;
      this.currentView = 'home';
      this.likedVideos = new Set(JSON.parse(localStorage.getItem('yt_liked') || '[]'));
      this.subscribedChannels = new Set(JSON.parse(localStorage.getItem('yt_subs') || '[]'));
      this.watchHistory = JSON.parse(localStorage.getItem('yt_history') || '[]');
      this.theme = localStorage.getItem('yt_theme') || 'dark';
      this.currentLang = localStorage.getItem('yt_lang') || 'UZ';
      this.videoProgress = JSON.parse(localStorage.getItem('yt_video_progress') || '{}');

      // Audio Booster State
      this.audioBoostLevel = 1.0;
      this.audioCtx = null;
      this.gainNode = null;
      this.audioSourceNode = null;

      // Ambient Mode State
      this.ambientActive = true;
      this.ambientAnimFrame = null;

      // CC Subtitles
      this.ccActive = false;

      // Sleep Timer State
      this.sleepTimerTimeout = null;
      this.sleepTimerMinutes = 0;

      // A-B Looper State
      this.loopA = null;
      this.loopB = null;

      // Quality
      this.qualities = ['1080p', '720p', '480p', 'Auto'];
      this.currentQualityIdx = 0;

      // Miniplayer State
      this.miniplayerActive = false;
      this.commentsSortMode = 'top';
      this.shortsComments = {};
      this.activeShortId = null;

      this.cacheDom();
      this.initTheme();
      this.initLang();
      this.bindEvents();
      this.renderCategoryChips();
      this.renderVideoGrid();
      this.loadRealShorts();
      this.refreshIcons();

      this.checkBackend();
      this.handleUrlParams();
      this.initPwa();
    }

    async checkBackend() {
      try {
        const res = await fetch(`${API_BASE}/api/search?q=AI&limit=1`, { signal: AbortSignal.timeout(2000) });
        if (res.ok) {
          console.log("[MuzaffarZed Engine] YouTube Pro Python FastAPI Backend ulangan!");
          this.backendOnline = true;
        }
      } catch (e) {
        this.backendOnline = false;
      }
    }

    loadStoredVideos() {
      const saved = localStorage.getItem('yt_custom_videos');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return [...parsed, ...sampleVideos];
        } catch (e) {
          return [...sampleVideos];
        }
      }
      return [...sampleVideos];
    }

    cacheDom() {
      // Layout & Nav
      this.sidebar = document.getElementById('sidebar');
      this.btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
      this.brandLogo = document.getElementById('brand-logo');
      this.chipsContainer = document.getElementById('category-chips');
      this.videoGrid = document.getElementById('video-grid');
      this.mainContent = document.getElementById('main-content');

      // Views
      this.viewHome = document.getElementById('view-home');
      this.viewWatch = document.getElementById('view-watch');
      this.viewShorts = document.getElementById('view-shorts');
      this.viewChannel = document.getElementById('view-channel');
      this.viewHistory = document.getElementById('view-history');

      // Channel Elements
      this.channelBanner = document.getElementById('channel-banner');
      this.channelPageAvatar = document.getElementById('channel-page-avatar');
      this.channelPageTitle = document.getElementById('channel-page-title');
      this.channelPageMeta = document.getElementById('channel-page-meta');
      this.btnChannelPageSub = document.getElementById('btn-channel-page-sub');
      this.channelVideosGrid = document.getElementById('channel-videos-grid');

      // History Elements
      this.btnClearAllHistory = document.getElementById('btn-clear-all-history');
      this.historyVideosGrid = document.getElementById('history-videos-grid');

      // Search & Live Suggestions
      this.searchInput = document.getElementById('global-search-input');
      this.btnSearch = document.getElementById('btn-search');
      this.btnClearSearch = document.getElementById('btn-clear-search');
      this.btnVoiceSearch = document.getElementById('btn-voice-search');
      this.suggestionsDropdown = document.getElementById('search-suggestions-dropdown');

      // Header Extra Tools
      this.btnToggleLang = document.getElementById('btn-toggle-lang');
      this.btnSleepTimer = document.getElementById('btn-sleep-timer');
      this.btnShortcutsHelp = document.getElementById('btn-shortcuts-help');

      // Video Player Elements
      this.playerContainer = document.getElementById('player-container');
      this.videoElement = document.getElementById('main-video-player');
      this.embedElement = document.getElementById('embed-video-player');
      this.ambientCanvas = document.getElementById('ambient-canvas');
      this.ambientCtx = this.ambientCanvas ? this.ambientCanvas.getContext('2d') : null;

      // Pro Player Tools
      this.btnVideoFilters = document.getElementById('btn-video-filters');
      this.videoFiltersMenu = document.getElementById('video-filters-menu');
      this.btnAbLoop = document.getElementById('btn-ab-loop');
      this.btnStatsNerds = document.getElementById('btn-stats-nerds');
      this.statsNerdsBox = document.getElementById('stats-for-nerds-box');
      this.statsContent = document.getElementById('stats-content');
      this.btnCloseStats = document.getElementById('btn-close-stats');

      // Subtitles & Frame Grabber & Loop
      this.subtitlesOverlay = document.getElementById('subtitles-overlay');
      this.subtitlesText = document.getElementById('subtitles-text');
      this.btnCcToggle = document.getElementById('btn-cc-toggle');
      this.btnScreenshotFrame = document.getElementById('btn-screenshot-frame');
      this.btnLoopToggle = document.getElementById('btn-loop-toggle');
      this.iconLoop = document.getElementById('icon-loop');

      this.btnPlayPause = document.getElementById('btn-play-pause');
      this.iconPlayPause = document.getElementById('icon-play-pause');
      this.scrubBar = document.getElementById('scrub-bar');
      this.scrubFill = document.getElementById('scrub-fill');
      this.timeDisplay = document.getElementById('time-display');
      this.btnMute = document.getElementById('btn-mute');
      this.iconVolume = document.getElementById('icon-volume');
      this.volumeSlider = document.getElementById('volume-slider');
      this.btnAudioBoost = document.getElementById('btn-audio-boost');
      this.btnAmbientToggle = document.getElementById('btn-ambient-toggle');
      this.btnSpeed = document.getElementById('btn-speed');
      this.btnQuality = document.getElementById('btn-quality');
      this.btnTheater = document.getElementById('btn-theater');
      this.btnFullscreen = document.getElementById('btn-fullscreen');
      this.btnNextVideo = document.getElementById('btn-next-video');

      // Volume & Mute Persistence
      const savedVol = localStorage.getItem('yt_volume');
      if (savedVol !== null && this.videoElement) {
        const parsedVol = parseFloat(savedVol);
        this.videoElement.volume = parsedVol;
        if (this.volumeSlider) this.volumeSlider.value = parsedVol;
      }
      const savedMuted = localStorage.getItem('yt_muted');
      if (savedMuted === 'true' && this.videoElement) {
        this.videoElement.muted = true;
        this.updateVolumeIcon();
      }

      // Watch Metadata & Actions
      this.watchTitle = document.getElementById('watch-title');
      this.watchChannelAvatar = document.getElementById('watch-channel-avatar');
      this.watchChannelName = document.getElementById('watch-channel-name');
      this.watchChannelSubs = document.getElementById('watch-channel-subs');
      this.btnSubscribe = document.getElementById('btn-subscribe');
      this.subscribeText = document.getElementById('subscribe-text');
      this.subscribeBell = document.getElementById('subscribe-bell');
      this.btnLike = document.getElementById('btn-like');
      this.likeCount = document.getElementById('like-count');
      this.btnDislike = document.getElementById('btn-dislike');
      this.btnShare = document.getElementById('btn-share');
      this.btnDownloadPro = document.getElementById('btn-download-pro');
      this.downloadDropdown = document.getElementById('download-dropdown');
      this.dlOptMp4 = document.getElementById('dl-opt-mp4');
      this.dlOptMp3 = document.getElementById('dl-opt-mp3');
      this.btnSavePlaylist = document.getElementById('btn-save-playlist');

      // Study Notes
      this.btnAddCurrentNote = document.getElementById('btn-add-current-note');
      this.noteInput = document.getElementById('note-input');
      this.btnSaveNote = document.getElementById('btn-save-note');
      this.notesList = document.getElementById('notes-list');

      // AI Summary & Chat
      this.btnAiSummary = document.getElementById('btn-ai-summary');
      this.aiSummaryCard = document.getElementById('ai-summary-card');
      this.aiSummaryContent = document.getElementById('ai-summary-content');
      this.btnCloseAiCard = document.getElementById('btn-close-ai-card');
      this.aiChatInput = document.getElementById('ai-chat-input');
      this.btnSendAiChat = document.getElementById('btn-send-ai-chat');
      this.aiChatAnswer = document.getElementById('ai-chat-answer');

      // Description
      this.descriptionBox = document.getElementById('description-box');
      this.watchViewsCount = document.getElementById('watch-views-count');
      this.watchPublishedDate = document.getElementById('watch-published-date');
      this.watchDescription = document.getElementById('watch-description');
      this.descToggleBtn = document.getElementById('desc-toggle-btn');

      // Comments
      this.commentsTotalCount = document.getElementById('comments-total-count');
      this.newCommentInput = document.getElementById('new-comment-input');
      this.commentActionsBar = document.getElementById('comment-actions-bar');
      this.btnCancelComment = document.getElementById('btn-cancel-comment');
      this.btnSubmitComment = document.getElementById('btn-submit-comment');
      this.commentsList = document.getElementById('comments-list');

      // Related List
      this.relatedVideosList = document.getElementById('related-videos-list');

      // Shorts
      this.shortsContainer = document.getElementById('shorts-container');

      // Floating Miniplayer
      this.miniplayerDock = document.getElementById('miniplayer-dock');
      this.miniplayerTitle = document.getElementById('miniplayer-title');
      this.miniplayerVideo = document.getElementById('miniplayer-video');
      this.btnMiniplayerExpand = document.getElementById('btn-miniplayer-expand');
      this.btnMiniplayerClose = document.getElementById('btn-miniplayer-close');

      // Modals
      this.uploadModal = document.getElementById('upload-modal');
      this.btnCreateVideo = document.getElementById('btn-create-video');
      this.btnCloseUploadModal = document.getElementById('btn-close-upload-modal');
      this.btnCancelUpload = document.getElementById('btn-cancel-upload');
      this.uploadForm = document.getElementById('upload-form');

      this.shareModal = document.getElementById('share-modal');
      this.btnCloseShareModal = document.getElementById('btn-close-share-modal');
      this.shareLinkInput = document.getElementById('share-link-input');
      this.btnCopyLink = document.getElementById('btn-copy-link');

      this.playlistModal = document.getElementById('playlist-modal');
      this.btnClosePlaylistModal = document.getElementById('btn-close-playlist-modal');
      this.playlistOptionsList = document.getElementById('playlist-options-list');
      this.newPlaylistNameInput = document.getElementById('new-playlist-name-input');
      this.btnCreatePlaylist = document.getElementById('btn-create-playlist');

      this.shortcutsModal = document.getElementById('shortcuts-modal');
      this.btnCloseShortcutsModal = document.getElementById('btn-close-shortcuts-modal');

      // Playlist View
      this.viewPlaylist = document.getElementById('view-playlist');
      this.playlistCoverImg = document.getElementById('playlist-cover-img');
      this.playlistViewTitle = document.getElementById('playlist-view-title');
      this.playlistViewMeta = document.getElementById('playlist-view-meta');
      this.playlistViewCount = document.getElementById('playlist-view-count');
      this.btnPlayAllPlaylist = document.getElementById('btn-play-all-playlist');
      this.btnDeleteEntirePlaylist = document.getElementById('btn-delete-entire-playlist');
      this.playlistItemsContainer = document.getElementById('playlist-items-container');
      this.currentPlaylistId = null;
      this.currentPlaylistItems = [];

      // Pro Player Controls Extra
      this.btnAudioEq = document.getElementById('btn-audio-eq');
      this.btnPipNative = document.getElementById('btn-pip-native');
      this.btnClip = document.getElementById('btn-clip');

      // Share Modal Extra
      this.btnToggleEmbed = document.getElementById('btn-toggle-embed');
      this.embedCodeWrap = document.getElementById('embed-code-wrap');
      this.embedCodeArea = document.getElementById('embed-code-area');
      this.btnCopyEmbed = document.getElementById('btn-copy-embed');
      this.shareTimestampChk = document.getElementById('share-timestamp-chk');
      this.shareCurrentTimeLabel = document.getElementById('share-current-time-label');

      // Voice Search Modal
      this.voiceSearchModal = document.getElementById('voice-search-modal');
      this.btnCloseVoiceModal = document.getElementById('btn-close-voice-modal');
      this.voiceStatusTitle = document.getElementById('voice-status-title');
      this.voiceInterimText = document.getElementById('voice-interim-text');
      this.btnVoiceActiveMic = document.getElementById('btn-voice-active-mic');

      // Studio Equalizer Modal
      this.equalizerModal = document.getElementById('equalizer-modal');
      this.btnCloseEqModal = document.getElementById('btn-close-eq-modal');
      this.btnResetEq = document.getElementById('btn-reset-eq');

      // Clip Maker Modal
      this.clipModal = document.getElementById('clip-modal');
      this.btnCloseClipModal = document.getElementById('btn-close-clip-modal');
      this.clipTitleInput = document.getElementById('clip-title-input');
      this.clipStartLabel = document.getElementById('clip-start-label');
      this.clipEndLabel = document.getElementById('clip-end-label');
      this.clipDurationLabel = document.getElementById('clip-duration-label');
      this.btnSetClipStart = document.getElementById('btn-set-clip-start');
      this.btnSetClipEnd = document.getElementById('btn-set-clip-end');
      this.btnPreviewClip = document.getElementById('btn-preview-clip');
      this.btnShareClip = document.getElementById('btn-share-clip');
      this.clipStartTime = 0;
      this.clipEndTime = 15;

      // Volume HUD
      this.volumeHud = document.getElementById('volume-hud');
      this.volumeHudLevel = document.getElementById('volume-hud-level');
      this.volumeHudIcon = document.getElementById('volume-hud-icon');

      // Autoplay Toggle & Countdown
      this.btnAutoplayToggle = document.getElementById('btn-autoplay-toggle');
      this.iconAutoplay = document.getElementById('icon-autoplay');
      this.autoplayOverlay = document.getElementById('autoplay-overlay');
      this.autoplayCountdownNumber = document.getElementById('autoplay-countdown-number');
      this.autoplayNextThumb = document.getElementById('autoplay-next-thumb');
      this.autoplayNextTitle = document.getElementById('autoplay-next-title');
      this.autoplayNextChannel = document.getElementById('autoplay-next-channel');
      this.btnCancelAutoplay = document.getElementById('btn-cancel-autoplay');
      this.btnPlayAutoplayNow = document.getElementById('btn-play-autoplay-now');
      this.autoplayTimer = null;
      this.autoplayActive = JSON.parse(localStorage.getItem('yt_autoplay') ?? 'true');

      // Double Click Ripple Zones
      this.dcZoneLeft = document.getElementById('dc-zone-left');
      this.dcZoneRight = document.getElementById('dc-zone-right');
      this.rippleLeft = document.getElementById('ripple-left');
      this.rippleRight = document.getElementById('ripple-right');

      // Sleep Timer Badge
      this.sleepTimerBadge = document.getElementById('sleep-timer-badge');
      this.sleepTimerInterval = null;

      // Watch Party
      this.btnWatchParty = document.getElementById('btn-watch-party');
      this.watchPartyModal = document.getElementById('watch-party-modal');
      this.btnClosePartyModal = document.getElementById('btn-close-party-modal');
      this.btnCreatePartyRoom = document.getElementById('btn-create-party-room');
      this.btnJoinPartyRoom = document.getElementById('btn-join-party-room');
      this.partyRoomCodeInput = document.getElementById('party-room-code-input');
      this.partyDisconnectedView = document.getElementById('party-disconnected-view');
      this.partyConnectedView = document.getElementById('party-connected-view');
      this.activeRoomCode = document.getElementById('active-room-code');
      this.activePartyMembersCount = document.getElementById('active-party-members-count');
      this.partyChatMessages = document.getElementById('party-chat-messages');
      this.partyChatInput = document.getElementById('party-chat-input');
      this.btnSendPartyChat = document.getElementById('btn-send-party-chat');
      this.btnCopyPartyLink = document.getElementById('btn-copy-party-link');
      this.btnLeaveParty = document.getElementById('btn-leave-party');
      this.partySocket = null;
      this.currentPartyRoom = null;

      this.btnConnectPhone = document.getElementById('btn-connect-phone');
      this.menuConnectPhone = document.getElementById('menu-connect-phone');
      this.connectPhoneModal = document.getElementById('connect-phone-modal');
      this.btnClosePhoneModal = document.getElementById('btn-close-phone-modal');
      this.phoneModalQrImg = document.getElementById('phone-modal-qr-img');
      this.phoneModalIpLink = document.getElementById('phone-modal-ip-link');
      this.phoneModalMdnsLink = document.getElementById('phone-modal-mdns-link');
      this.btnCopyIpLink = document.getElementById('btn-copy-ip-link');
      this.btnCopyMdnsLink = document.getElementById('btn-copy-mdns-link');
      this.btnInfoCloudflare = document.getElementById('btn-info-cloudflare');
      this.phoneModalCfLink = document.getElementById('phone-modal-cf-link');
      this.btnCopyCfLink = document.getElementById('btn-copy-cf-link');
      this.networkInfoData = null;

      this.btnInstallPwa = document.getElementById('btn-install-pwa');
      this.speedDropdown = document.getElementById('speed-dropdown');
      this.qualityDropdown = document.getElementById('quality-dropdown');
      this.deferredPrompt = null;

      this.toast = document.getElementById('toast');
      this.toastMessage = document.getElementById('toast-message');
      this.btnToggleTheme = document.getElementById('btn-toggle-theme');
      this.themeIcon = document.getElementById('theme-icon');

      // Pro Polish DOM elements
      this.scrubBuffer = document.getElementById('scrub-buffer');
      this.scrubTooltip = document.getElementById('scrub-tooltip');
      this.tooltipChapter = document.getElementById('tooltip-chapter');
      this.tooltipTime = document.getElementById('tooltip-time');

      this.playerCenterSplash = document.getElementById('player-center-splash');
      this.centerSplashIcon = document.getElementById('center-splash-icon');

      this.btnChapters = document.getElementById('btn-chapters');
      this.chaptersModal = document.getElementById('chapters-modal');
      this.btnCloseChaptersModal = document.getElementById('btn-close-chapters-modal');
      this.chaptersListContainer = document.getElementById('chapters-list-container');

      this.btnSortComments = document.getElementById('btn-sort-comments');
      this.sortCommentsLabel = document.getElementById('sort-comments-label');

      this.shortsCommentsDrawer = document.getElementById('shorts-comments-drawer');
      this.btnCloseShortsComments = document.getElementById('btn-close-shorts-comments');
      this.shortsCommentsList = document.getElementById('shorts-comments-list');
      this.shortsCommentInput = document.getElementById('shorts-comment-input');
      this.btnSubmitShortsComment = document.getElementById('btn-submit-shorts-comment');
      this.shortsCommentsCount = document.getElementById('shorts-comments-count');

      this.playerContextMenu = document.getElementById('player-context-menu');
      this.ctxLoop = document.getElementById('ctx-loop');
      this.ctxLoopText = document.getElementById('ctx-loop-text');
      this.ctxCopyUrl = document.getElementById('ctx-copy-url');
      this.ctxCopyTime = document.getElementById('ctx-copy-time');
      this.ctxCopyEmbed = document.getElementById('ctx-copy-embed');
      this.ctxStats = document.getElementById('ctx-stats');
      this.ctxEq = document.getElementById('ctx-eq');
      this.ctxPip = document.getElementById('ctx-pip');

      // 2x Speed Pill & Notifications & Profile
      this.speed2xPill = document.getElementById('speed-2x-pill');
      this.btnNotifications = document.getElementById('btn-notifications');
      this.notificationsDropdown = document.getElementById('notifications-dropdown');
      this.btnCloseNotif = document.getElementById('btn-close-notif');
      this.userProfileTrigger = document.getElementById('user-profile-menu-trigger');
      this.userProfileDropdown = document.getElementById('user-profile-dropdown');
      this.sleepTimerDropdown = document.getElementById('sleep-timer-dropdown');
      this.viewSubscriptions = document.getElementById('view-subscriptions');
      this.subsChannelsRow = document.getElementById('subs-channels-row');
      this.subsFilterChips = document.getElementById('subs-filter-chips');
      this.subsVideoGrid = document.getElementById('subs-video-grid');
      this.btnManageSubsPage = document.getElementById('btn-manage-subs-page');

      // V6 Components: Subtitles Menu, Channel Tabs & Search, History Search, Sound Modal
      this.subtitlesLangMenu = document.getElementById('subtitles-lang-menu');
      this.tabChannelShorts = document.getElementById('tab-channel-shorts');
      this.tabChannelPlaylists = document.getElementById('tab-channel-playlists');
      this.channelSearchInput = document.getElementById('channel-search-input');
      this.channelAboutSection = document.getElementById('channel-about-section');
      this.historySearchInput = document.getElementById('history-search-input');
      this.btnPauseHistory = document.getElementById('btn-pause-history');
      this.pauseHistoryLabel = document.getElementById('pause-history-label');
      this.shortsSoundModal = document.getElementById('shorts-sound-modal');
      this.btnCloseSoundModal = document.getElementById('btn-close-sound-modal');
      this.soundModalTitle = document.getElementById('sound-modal-title');
      this.soundModalAuthor = document.getElementById('sound-modal-author');
      this.btnUseSound = document.getElementById('btn-use-sound');
    }

    refreshIcons() {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    initTheme() {
      document.documentElement.setAttribute('data-theme', this.theme);
      this.updateThemeIcon();
    }

    updateThemeIcon() {
      if (this.theme === 'light') {
        this.themeIcon.setAttribute('data-lucide', 'sun');
      } else {
        this.themeIcon.setAttribute('data-lucide', 'moon');
      }
      this.refreshIcons();
    }

    initLang() {
      this.btnToggleLang.textContent = this.currentLang;
    }

    toggleLanguage() {
      this.currentLang = this.currentLang === 'UZ' ? 'EN' : 'UZ';
      localStorage.setItem('yt_lang', this.currentLang);
      this.btnToggleLang.textContent = this.currentLang;
      this.showToast(`Til almashtirildi: ${this.currentLang === 'UZ' ? "O'zbek tili" : 'English'}`);
    }

    initWebAudio() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
        this.gainNode = this.audioCtx.createGain();

        // 5-Band Studio Equalizer Filters
        this.eqFilters = {
          f60: this.audioCtx.createBiquadFilter(),
          f250: this.audioCtx.createBiquadFilter(),
          f1k: this.audioCtx.createBiquadFilter(),
          f4k: this.audioCtx.createBiquadFilter(),
          f12k: this.audioCtx.createBiquadFilter()
        };

        this.eqFilters.f60.type = 'lowshelf';
        this.eqFilters.f60.frequency.value = 60;

        this.eqFilters.f250.type = 'peaking';
        this.eqFilters.f250.frequency.value = 250;
        this.eqFilters.f250.Q.value = 1.0;

        this.eqFilters.f1k.type = 'peaking';
        this.eqFilters.f1k.frequency.value = 1000;
        this.eqFilters.f1k.Q.value = 1.0;

        this.eqFilters.f4k.type = 'peaking';
        this.eqFilters.f4k.frequency.value = 4000;
        this.eqFilters.f4k.Q.value = 1.0;

        this.eqFilters.f12k.type = 'highshelf';
        this.eqFilters.f12k.frequency.value = 12000;

        try {
          this.audioSourceNode = this.audioCtx.createMediaElementSource(this.videoElement);
          this.audioSourceNode.connect(this.eqFilters.f60);
          this.eqFilters.f60.connect(this.eqFilters.f250);
          this.eqFilters.f250.connect(this.eqFilters.f1k);
          this.eqFilters.f1k.connect(this.eqFilters.f4k);
          this.eqFilters.f4k.connect(this.eqFilters.f12k);
          this.eqFilters.f12k.connect(this.gainNode);
          this.gainNode.connect(this.audioCtx.destination);
        } catch (e) {
          console.warn("[WebAudio] Init error:", e);
        }
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    setEqualizerBand(band, val) {
      this.initWebAudio();
      if (!this.eqFilters) return;
      const key = `f${band}`;
      if (this.eqFilters[key]) {
        this.eqFilters[key].gain.value = parseFloat(val);
      }
      const valEl = document.getElementById(`val-${band}`);
      if (valEl) valEl.textContent = `${val > 0 ? '+' : ''}${val}dB`;
    }

    setEqualizerPreset(preset) {
      const presets = {
        flat:   { 60: 0, 250: 0, '1k': 0, '4k': 0, '12k': 0 },
        bass:   { 60: 8, 250: 5, '1k': 0, '4k': -1, '12k': -2 },
        vocal:  { 60: -3, 250: 2, '1k': 6, '4k': 4, '12k': 2 },
        cinema: { 60: 6, 250: 2, '1k': -1, '4k': 5, '12k': 7 },
        rock:   { 60: 7, 250: 4, '1k': -1, '4k': 5, '12k': 8 },
        calm:   { 60: -2, 250: 0, '1k': 2, '4k': -2, '12k': -5 },
      };

      const cfg = presets[preset] || presets.flat;
      for (const [band, gain] of Object.entries(cfg)) {
        this.setEqualizerBand(band, gain);
        const slider = document.getElementById(`eq-${band}`);
        if (slider) slider.value = gain;
      }

      document.querySelectorAll('#eq-presets-container .yt-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-preset') === preset);
      });
      this.showToast(`Ekvalayzer: ${preset.toUpperCase()}`);
    }

    setAudioBoost(level) {
      this.initWebAudio();
      this.audioBoostLevel = level;
      if (this.gainNode) {
        this.gainNode.gain.value = level;
      }
      this.btnAudioBoost.textContent = `BOOST ${level}x`;
      if (level > 1.0) {
        this.btnAudioBoost.style.background = 'var(--yt-blue)';
        this.btnAudioBoost.style.color = '#000';
      } else {
        this.btnAudioBoost.style.background = 'rgba(255,255,255,0.1)';
        this.btnAudioBoost.style.color = '#fff';
      }
      this.showToast(`Ovoz kuchaytirgich: ${level * 100}%`);
    }

    startAmbientLoop() {
      if (!this.ambientCanvas || !this.ambientCtx) return;
      if (this.ambientCanvas.width !== 64) this.ambientCanvas.width = 64;
      if (this.ambientCanvas.height !== 36) this.ambientCanvas.height = 36;
      const renderAmbient = () => {
        if (this.ambientActive && !this.videoElement.paused && !this.videoElement.ended && this.videoElement.videoWidth) {
          try {
            this.ambientCtx.drawImage(this.videoElement, 0, 0, 64, 36);
          } catch (e) {}
        }
        if (this.currentView === 'watch') {
          this.ambientAnimFrame = requestAnimationFrame(renderAmbient);
        }
      };
      cancelAnimationFrame(this.ambientAnimFrame);
      this.ambientAnimFrame = requestAnimationFrame(renderAmbient);
    }

    captureCurrentFrame() {
      if (!this.videoElement || !this.videoElement.videoWidth) {
        this.showToast("Kadrni suratga olib bo'lmadi (video faol emas)");
        return;
      }
      try {
        const canvas = document.createElement('canvas');
        canvas.width = this.videoElement.videoWidth;
        canvas.height = this.videoElement.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
        
        const a = document.createElement('a');
        a.download = `MuzaffarZed_YouTube_Frame_${Math.floor(this.videoElement.currentTime)}s.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
        this.showToast("Video kadri PNG sifatida yuklab olindi! 📸");
      } catch (e) {
        this.showToast("Kadrni saqlashda xatolik yuz berdi");
      }
    }

    bindEvents() {
      // Theme toggle
      this.btnToggleTheme.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('yt_theme', this.theme);
        this.updateThemeIcon();
        this.showToast(`Mavzu: ${this.theme === 'dark' ? 'Tungi' : 'Kunduzgi'}`);
      });

      // Language Toggle
      this.btnToggleLang.addEventListener('click', () => this.toggleLanguage());

      // Sidebar Toggle
      this.btnToggleSidebar.addEventListener('click', () => {
        this.sidebar.classList.toggle('collapsed');
      });

      // Brand Logo Home Reset
      this.brandLogo.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('home');
      });

      // Nav Links
      document.querySelectorAll('.yt-sidebar-item[data-nav]').forEach(item => {
        item.addEventListener('click', () => {
          document.querySelectorAll('.yt-sidebar-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          const targetNav = item.getAttribute('data-nav');
          if (targetNav === 'home') this.switchView('home');
          else if (targetNav === 'shorts') this.switchView('shorts');
          else if (targetNav === 'subscriptions') {
            this.openSubscriptionsView();
          } else if (targetNav === 'history') {
            this.openHistoryView();
          } else if (targetNav === 'liked') {
            this.switchView('home');
            this.filterLiked();
          } else if (targetNav === 'watch-later') {
            this.openPlaylistView('pl-watch-later', "Keyinroq ko'rish");
          }
        });
      });

      // Category Sidebar links
      document.querySelectorAll('.yt-sidebar-item[data-category]').forEach(item => {
        item.addEventListener('click', () => {
          const cat = item.getAttribute('data-category');
          this.selectCategory(cat);
        });
      });

      // Clear History
      this.btnClearAllHistory.addEventListener('click', () => {
        this.watchHistory = [];
        localStorage.removeItem('yt_history');
        this.historyVideosGrid.innerHTML = '<p style="color: var(--yt-text-secondary); padding: 40px;">Tarix tozalandi.</p>';
        this.showToast("Barcha ko'rishlar tarixi o'chirildi!");
      });

      // Live Search & Suggestions
      let searchDebounce;
      this.searchInput.addEventListener('input', () => {
        const val = this.searchInput.value.trim();
        this.btnClearSearch.style.display = val ? 'block' : 'none';
        this.searchQuery = val;
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => {
          this.fetchSuggestions(val);
          this.performSearch(val);
        }, 300);
      });

      this.btnClearSearch.addEventListener('click', () => {
        this.searchInput.value = '';
        this.searchQuery = '';
        this.btnClearSearch.style.display = 'none';
        this.suggestionsDropdown.style.display = 'none';
        this.renderVideoGrid();
      });

      this.btnSearch.addEventListener('click', () => {
        this.searchQuery = this.searchInput.value.trim();
        this.suggestionsDropdown.style.display = 'none';
        this.switchView('home');
        this.performSearch(this.searchQuery);
      });

      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.searchQuery = this.searchInput.value.trim();
          this.suggestionsDropdown.style.display = 'none';
          this.switchView('home');
          this.performSearch(this.searchQuery);
        }
      });

      // Hide suggestions & menus on click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.yt-search-container')) {
          if (this.suggestionsDropdown) this.suggestionsDropdown.style.display = 'none';
        }
        if (!e.target.closest('#btn-video-filters') && !e.target.closest('#video-filters-menu')) {
          if (this.videoFiltersMenu) this.videoFiltersMenu.style.display = 'none';
        }
        if (!e.target.closest('#btn-speed') && !e.target.closest('#speed-dropdown')) {
          if (this.speedDropdown) this.speedDropdown.style.display = 'none';
        }
        if (!e.target.closest('#btn-quality') && !e.target.closest('#quality-dropdown')) {
          if (this.qualityDropdown) this.qualityDropdown.style.display = 'none';
        }
      });

      // Speed Dropdown
      if (this.btnSpeed && this.speedDropdown) {
        this.btnSpeed.addEventListener('click', (e) => {
          e.stopPropagation();
          const isShow = this.speedDropdown.style.display === 'block';
          this.speedDropdown.style.display = isShow ? 'none' : 'block';
          if (this.qualityDropdown) this.qualityDropdown.style.display = 'none';
        });

        this.speedDropdown.querySelectorAll('.yt-dropdown-item').forEach(item => {
          item.addEventListener('click', () => {
            const sp = parseFloat(item.getAttribute('data-speed'));
            this.videoElement.playbackRate = sp;
            this.btnSpeed.textContent = `${sp}x`;
            this.speedDropdown.style.display = 'none';
            this.showToast(`Tezlik: ${sp}x`);
          });
        });
      }

      // Quality Dropdown
      if (this.btnQuality && this.qualityDropdown) {
        this.btnQuality.addEventListener('click', (e) => {
          e.stopPropagation();
          const isShow = this.qualityDropdown.style.display === 'block';
          this.qualityDropdown.style.display = isShow ? 'none' : 'block';
          if (this.speedDropdown) this.speedDropdown.style.display = 'none';
        });

        this.qualityDropdown.querySelectorAll('.yt-dropdown-item').forEach(item => {
          item.addEventListener('click', () => {
            const q = item.getAttribute('data-quality');
            this.btnQuality.textContent = q;
            this.qualityDropdown.style.display = 'none';
            this.showToast(`Sifat sozlandi: ${q}`);
          });
        });
      }

      // Real Web Speech API Voice Search
      this.btnVoiceSearch.addEventListener('click', () => this.startVoiceSearch());
      if (this.btnCloseVoiceModal) {
        this.btnCloseVoiceModal.addEventListener('click', () => {
          if (this.recognition) {
            try { this.recognition.abort(); } catch (e) {}
          }
          this.voiceSearchModal.classList.remove('open');
        });
      }
      if (this.btnVoiceActiveMic) {
        this.btnVoiceActiveMic.addEventListener('click', () => this.startVoiceSearch());
      }

      // Video Filters Menu
      this.btnVideoFilters.addEventListener('click', (e) => {
        e.stopPropagation();
        this.videoFiltersMenu.style.display = this.videoFiltersMenu.style.display === 'none' ? 'block' : 'none';
      });

      document.querySelectorAll('#video-filters-menu .yt-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          const mode = item.getAttribute('data-filter');
          this.applyVideoFilter(mode);
          this.videoFiltersMenu.style.display = 'none';
        });
      });

      // A-B Looper
      this.btnAbLoop.addEventListener('click', () => this.toggleAbLoop());

      // Stats for Nerds
      this.btnStatsNerds.addEventListener('click', () => this.toggleStatsNerds());
      this.btnCloseStats.addEventListener('click', () => {
        this.statsNerdsBox.style.display = 'none';
      });

      // Notes
      this.btnAddCurrentNote.addEventListener('click', () => {
        if (!this.currentVideo) return;
        const cur = Math.floor(this.videoElement.currentTime);
        this.noteInput.value = `[${this.formatTime(cur)}] `;
        this.noteInput.focus();
      });

      this.btnSaveNote.addEventListener('click', () => this.saveNote());
      this.noteInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.saveNote();
      });

      // Sleep Timer Button
      this.btnSleepTimer.addEventListener('click', () => {
        const durations = [15, 30, 45, 60, 0];
        const nextDur = durations[(durations.indexOf(this.sleepTimerMinutes) + 1) % durations.length];
        this.setSleepTimer(nextDur);
      });

      // Shortcuts Help Modal
      this.btnShortcutsHelp.addEventListener('click', () => {
        this.shortcutsModal.classList.add('open');
      });
      this.btnCloseShortcutsModal.addEventListener('click', () => {
        this.shortcutsModal.classList.remove('open');
      });

      // Screenshot Frame Grabber
      this.btnScreenshotFrame.addEventListener('click', () => this.captureCurrentFrame());

      // Loop Toggle
      this.btnLoopToggle.addEventListener('click', () => {
        this.videoElement.loop = !this.videoElement.loop;
        this.iconLoop.style.color = this.videoElement.loop ? 'var(--yt-blue)' : 'inherit';
        this.showToast(`Takrorlash (Loop): ${this.videoElement.loop ? 'Yoqildi' : "O'chirildi"}`);
      });

      // CC Subtitle Toggle
      this.btnCcToggle.addEventListener('click', () => {
        this.ccActive = !this.ccActive;
        this.subtitlesOverlay.style.display = this.ccActive ? 'block' : 'none';
        this.btnCcToggle.style.color = this.ccActive ? 'var(--yt-red)' : '#fff';
        this.btnCcToggle.style.borderColor = this.ccActive ? 'var(--yt-red)' : 'rgba(255,255,255,0.4)';
        this.showToast(`Subtitrlar: ${this.ccActive ? 'Yoqildi' : "O'chirildi"}`);
      });

// Quality Dropdown managed via qualityDropdown

      // Audio Booster Button
      this.btnAudioBoost.addEventListener('click', () => {
        const nextBoost = this.audioBoostLevel === 1.0 ? 2.0 : (this.audioBoostLevel === 2.0 ? 3.0 : 1.0);
        this.setAudioBoost(nextBoost);
      });

      // Ambient Mode Toggle
      this.btnAmbientToggle.addEventListener('click', () => {
        this.ambientActive = !this.ambientActive;
        this.ambientCanvas.style.opacity = this.ambientActive ? '0.6' : '0';
        this.showToast(`Ambient nur: ${this.ambientActive ? 'Yoqildi' : "O'chirildi"}`);
      });

      // AI Summary Button
      this.btnAiSummary.addEventListener('click', () => this.generateAiSummary());
      this.btnCloseAiCard.addEventListener('click', () => {
        this.aiSummaryCard.style.display = 'none';
      });

      // AI Interactive Chat
      this.btnSendAiChat.addEventListener('click', () => this.handleAiChat());
      this.aiChatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleAiChat();
      });

      // Pro Downloader
      this.btnDownloadPro.addEventListener('click', (e) => {
        e.stopPropagation();
        this.downloadDropdown.style.display = this.downloadDropdown.style.display === 'none' ? 'block' : 'none';
      });

      this.dlOptMp4.addEventListener('click', () => this.triggerDownload('mp4'));
      this.dlOptMp3.addEventListener('click', () => this.triggerDownload('mp3'));

      // Playlist Modal
      this.btnSavePlaylist.addEventListener('click', () => this.openPlaylistModal());
      this.btnClosePlaylistModal.addEventListener('click', () => {
        this.playlistModal.classList.remove('open');
      });
      this.btnCreatePlaylist.addEventListener('click', () => this.createCustomPlaylist());

      // Floating Miniplayer Events
      this.btnMiniplayerExpand.addEventListener('click', () => {
        this.dockMiniplayer(false);
        this.switchView('watch');
      });

      this.btnMiniplayerClose.addEventListener('click', () => {
        this.dockMiniplayer(false);
        this.videoElement.pause();
      });

      // Channel Avatar Clicks
      this.watchChannelAvatar.addEventListener('click', () => {
        if (this.currentVideo) this.openChannelPage(this.currentVideo.channel);
      });
      this.watchChannelName.addEventListener('click', () => {
        if (this.currentVideo) this.openChannelPage(this.currentVideo.channel);
      });

      // Video Player events
      this.btnPlayPause.addEventListener('click', () => this.togglePlayPause());
      this.videoElement.addEventListener('click', () => this.togglePlayPause());

      this.videoElement.addEventListener('play', () => {
        this.startAmbientLoop();
        this.updatePlayPauseIcon(true);
      });

      this.videoElement.addEventListener('pause', () => {
        this.updatePlayPauseIcon(false);
      });

      this.videoElement.addEventListener('timeupdate', () => this.onTimeUpdate());
      this.videoElement.addEventListener('loadedmetadata', () => this.onLoadedMetadata());
      this.videoElement.addEventListener('ended', () => this.handleVideoEnded());

      // Autoplay Toggle
      if (this.btnAutoplayToggle) {
        this.btnAutoplayToggle.addEventListener('click', () => {
          this.autoplayActive = !this.autoplayActive;
          localStorage.setItem('yt_autoplay', JSON.stringify(this.autoplayActive));
          if (this.iconAutoplay) {
            this.iconAutoplay.setAttribute('data-lucide', this.autoplayActive ? 'toggle-right' : 'toggle-left');
          }
          this.btnAutoplayToggle.style.color = this.autoplayActive ? 'var(--yt-blue)' : 'var(--yt-text-secondary)';
          this.showToast(`Avtomatik ijro: ${this.autoplayActive ? 'Yoqildi' : "O'chirildi"}`);
          this.refreshIcons();
        });
      }

      if (this.btnCancelAutoplay) {
        this.btnCancelAutoplay.addEventListener('click', () => {
          clearInterval(this.autoplayTimer);
          this.autoplayOverlay.style.display = 'none';
          this.showToast("Avtomatik ijro to'xtatildi");
        });
      }

      if (this.btnPlayAutoplayNow) {
        this.btnPlayAutoplayNow.addEventListener('click', () => {
          clearInterval(this.autoplayTimer);
          this.autoplayOverlay.style.display = 'none';
          this.playNextVideo();
        });
      }

      // Double-Click Ripple Zones (+10s / -10s)
      if (this.dcZoneLeft) {
        this.dcZoneLeft.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 10);
          this.sendPartyAction('seek');
          if (this.rippleLeft) {
            this.rippleLeft.classList.add('active');
            setTimeout(() => this.rippleLeft.classList.remove('active'), 550);
          }
          this.showToast("-10 soniya ◀◀");
        });
      }

      if (this.dcZoneRight) {
        this.dcZoneRight.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          this.videoElement.currentTime = Math.min(this.videoElement.duration || 0, this.videoElement.currentTime + 10);
          this.sendPartyAction('seek');
          if (this.rippleRight) {
            this.rippleRight.classList.add('active');
            setTimeout(() => this.rippleRight.classList.remove('active'), 550);
          }
          this.showToast("+10 soniya ▶▶");
        });
      }

      // Watch Party Events
      if (this.btnWatchParty) {
        this.btnWatchParty.addEventListener('click', () => this.openWatchPartyModal());
      }
      if (this.btnClosePartyModal) {
        this.btnClosePartyModal.addEventListener('click', () => this.watchPartyModal.classList.remove('open'));
      }
      if (this.btnCreatePartyRoom) {
        this.btnCreatePartyRoom.addEventListener('click', () => this.joinWatchParty());
      }
      if (this.btnJoinPartyRoom) {
        this.btnJoinPartyRoom.addEventListener('click', () => {
          const code = this.partyRoomCodeInput.value.trim();
          if (code) this.joinWatchParty(code);
          else this.showToast("Iltimos, xona kodini kiriting!");
        });
      }
      if (this.btnSendPartyChat) {
        this.btnSendPartyChat.addEventListener('click', () => this.sendPartyChat());
      }
      if (this.partyChatInput) {
        this.partyChatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') this.sendPartyChat();
        });
      }
      if (this.btnCopyPartyLink) {
        this.btnCopyPartyLink.addEventListener('click', () => {
          const url = `${window.location.origin}/?v=${this.currentVideo?.id || ''}&party=${this.currentPartyRoom || ''}`;
          navigator.clipboard.writeText(url).then(() => this.showToast("Watch Party taklif havolasi nusxalandi! 👥"));
        });
      }
      if (this.btnLeaveParty) {
        this.btnLeaveParty.addEventListener('click', () => this.leaveParty());
      }

      // Scrub bar seek
      this.scrubBar.addEventListener('click', (e) => {
        const rect = this.scrubBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        this.videoElement.currentTime = pos * this.videoElement.duration;
      });

      // Volume & Mute
      this.btnMute.addEventListener('click', () => this.toggleMute());
      this.volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.videoElement.volume = val;
        this.videoElement.muted = (val === 0);
        localStorage.setItem('yt_volume', val);
        localStorage.setItem('yt_muted', val === 0);
        this.updateVolumeIcon();
      });

// Speed Dropdown managed via speedDropdown

      // Theater Mode (Kinoteatr Rejimi)
      this.btnTheater.addEventListener('click', () => this.toggleTheaterMode());

      // Studio Equalizer Modal
      if (this.btnAudioEq) {
        this.btnAudioEq.addEventListener('click', () => {
          this.equalizerModal.classList.add('open');
        });
      }
      if (this.btnCloseEqModal) {
        this.btnCloseEqModal.addEventListener('click', () => {
          this.equalizerModal.classList.remove('open');
        });
      }
      if (this.btnResetEq) {
        this.btnResetEq.addEventListener('click', () => this.setEqualizerPreset('flat'));
      }
      document.querySelectorAll('#eq-presets-container .yt-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          this.setEqualizerPreset(chip.getAttribute('data-preset'));
        });
      });
      ['60', '250', '1k', '4k', '12k'].forEach(band => {
        const slider = document.getElementById(`eq-${band}`);
        if (slider) {
          slider.addEventListener('input', (e) => {
            this.setEqualizerBand(band, e.target.value);
          });
        }
      });

      // Native Picture-in-Picture
      if (this.btnPipNative) {
        this.btnPipNative.addEventListener('click', () => this.toggleNativePip());
      }

      // Clip Maker Modal
      if (this.btnClip) {
        this.btnClip.addEventListener('click', () => this.openClipModal());
      }
      if (this.btnCloseClipModal) {
        this.btnCloseClipModal.addEventListener('click', () => this.clipModal.classList.remove('open'));
      }
      if (this.btnSetClipStart) {
        this.btnSetClipStart.addEventListener('click', () => {
          this.clipStartTime = Math.floor(this.videoElement.currentTime || 0);
          if (this.clipEndTime <= this.clipStartTime) {
            this.clipEndTime = Math.min(Math.floor(this.videoElement.duration || 60), this.clipStartTime + 15);
          }
          this.updateClipLabels();
        });
      }
      if (this.btnSetClipEnd) {
        this.btnSetClipEnd.addEventListener('click', () => {
          const cur = Math.floor(this.videoElement.currentTime || 0);
          if (cur > this.clipStartTime) {
            this.clipEndTime = cur;
            this.updateClipLabels();
          } else {
            this.showToast("Tugash vaqti boshlanishdan keyin bo'lishi kerak");
          }
        });
      }
      if (this.btnPreviewClip) {
        this.btnPreviewClip.addEventListener('click', () => this.previewClip());
      }
      if (this.btnShareClip) {
        this.btnShareClip.addEventListener('click', () => this.shareClip());
      }

      // Share Modal Options
      if (this.shareTimestampChk) {
        this.shareTimestampChk.addEventListener('change', () => this.updateShareUrl());
      }
      if (this.btnToggleEmbed) {
        this.btnToggleEmbed.addEventListener('click', () => {
          const isShow = this.embedCodeWrap.style.display === 'block';
          this.embedCodeWrap.style.display = isShow ? 'none' : 'block';
          if (!isShow && this.currentVideo) {
            this.embedCodeArea.value = `<iframe width="100%" height="450" src="${window.location.origin}/?v=${this.currentVideo.id}&embed=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          }
        });
      }
      if (this.btnCopyEmbed) {
        this.btnCopyEmbed.addEventListener('click', () => {
          navigator.clipboard.writeText(this.embedCodeArea.value).then(() => {
            this.showToast("Embed iframe kodi nusxalandi! 📋");
          });
        });
      }

      // Playlist View Controls
      if (this.btnPlayAllPlaylist) {
        this.btnPlayAllPlaylist.addEventListener('click', () => this.playAllPlaylist());
      }
      if (this.btnDeleteEntirePlaylist) {
        this.btnDeleteEntirePlaylist.addEventListener('click', () => this.deleteEntirePlaylist());
      }

      // Fullscreen
      this.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.playerContainer.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen();
        }
      });

      // Next Video
      this.btnNextVideo.addEventListener('click', () => this.playNextVideo());

      // Subscribe Button
      this.btnSubscribe.addEventListener('click', () => this.toggleSubscribe());

      // Like / Dislike
      this.btnLike.addEventListener('click', () => this.toggleLike());
      this.btnDislike.addEventListener('click', () => this.toggleDislike());

      // Share Modal
      this.btnShare.addEventListener('click', () => {
        this.shareLinkInput.value = window.location.href;
        this.shareModal.classList.add('open');
      });

      this.btnCloseShareModal.addEventListener('click', () => {
        this.shareModal.classList.remove('open');
      });

      this.btnCopyLink.addEventListener('click', () => {
        navigator.clipboard.writeText(this.shareLinkInput.value).then(() => {
          this.showToast("Havola nusxalandi!");
        });
      });

      // Description Expand/Collapse
      this.descriptionBox.addEventListener('click', () => {
        this.watchDescription.classList.toggle('collapsed');
        this.descToggleBtn.textContent = this.watchDescription.classList.contains('collapsed') ? "Yana ko'rsatish" : "Qisqartirish";
      });

      // Comment Input Handlers
      this.newCommentInput.addEventListener('focus', () => {
        this.commentActionsBar.style.display = 'flex';
      });

      this.newCommentInput.addEventListener('input', () => {
        this.btnSubmitComment.disabled = !this.newCommentInput.value.trim();
      });

      this.btnCancelComment.addEventListener('click', () => {
        this.newCommentInput.value = '';
        this.btnSubmitComment.disabled = true;
        this.commentActionsBar.style.display = 'none';
      });

      this.btnSubmitComment.addEventListener('click', () => this.addComment());

      // Upload Video Modal
      this.btnCreateVideo.addEventListener('click', () => {
        this.uploadModal.classList.add('open');
      });

      this.btnCloseUploadModal.addEventListener('click', () => {
        this.uploadModal.classList.remove('open');
      });

      this.btnCancelUpload.addEventListener('click', () => {
        this.uploadModal.classList.remove('open');
      });

      this.uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUploadSubmit();
      });

      // Global Keyboard Shortcuts
      document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === '?') {
          e.preventDefault();
          this.shortcutsModal.classList.toggle('open');
        }

        if (this.currentView === 'watch') {
          if (e.key === ' ' || e.key === 'k') {
            e.preventDefault();
            this.togglePlayPause();
          } else if (e.key === 'f') {
            e.preventDefault();
            this.btnFullscreen.click();
          } else if (e.key === 'm') {
            e.preventDefault();
            this.toggleMute();
          } else if (e.key === 't') {
            e.preventDefault();
            this.toggleTheaterMode();
          } else if (e.key === 'c') {
            e.preventDefault();
            this.btnCcToggle.click();
          } else if (e.key === 'z' || e.key === 'Z') {
            e.preventDefault();
            this.toggleZoomFill();
          } else if (e.key === 'p') {
            e.preventDefault();
            this.toggleNativePip();
          } else if (e.key === 'i') {
            e.preventDefault();
            this.dockMiniplayer(!this.miniplayerActive);
          } else if (e.key >= '0' && e.key <= '9') {
            if (this.videoElement.duration) {
              const targetTime = this.videoElement.duration * (parseInt(e.key) / 10);
              this.videoElement.currentTime = targetTime;
              this.showToast(`Sakrash: ${parseInt(e.key) * 10}%`);
            }
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const newVol = Math.min(1, this.videoElement.volume + 0.05);
            this.videoElement.volume = newVol;
            this.volumeSlider.value = newVol;
            this.updateVolumeIcon();
            this.showVolumeHud(newVol);
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newVol = Math.max(0, this.videoElement.volume - 0.05);
            this.videoElement.volume = newVol;
            this.volumeSlider.value = newVol;
            this.updateVolumeIcon();
            this.showVolumeHud(newVol);
          } else if (e.key === '>' || (e.shiftKey && e.key === '.')) {
            let cur = this.videoElement.playbackRate;
            let idx = speeds.indexOf(cur);
            if (idx < speeds.length - 1) {
              this.videoElement.playbackRate = speeds[idx + 1];
              this.btnSpeed.textContent = `${speeds[idx + 1]}x`;
              this.showToast(`Tezlik: ${speeds[idx + 1]}x`);
            }
          } else if (e.key === '<' || (e.shiftKey && e.key === ',')) {
            let cur = this.videoElement.playbackRate;
            let idx = speeds.indexOf(cur);
            if (idx > 0) {
              this.videoElement.playbackRate = speeds[idx - 1];
              this.btnSpeed.textContent = `${speeds[idx - 1]}x`;
              this.showToast(`Tezlik: ${speeds[idx - 1]}x`);
            }
          } else if (e.key === '.' && this.videoElement.paused) {
            this.videoElement.currentTime = Math.min(this.videoElement.duration, this.videoElement.currentTime + 0.04);
          } else if (e.key === ',' && this.videoElement.paused) {
            this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 0.04);
          } else if (e.key === 'ArrowRight' || e.key === 'l') {
            this.videoElement.currentTime = Math.min(this.videoElement.duration, this.videoElement.currentTime + 10);
          } else if (e.key === 'ArrowLeft' || e.key === 'j') {
            this.videoElement.currentTime = Math.max(0, this.videoElement.currentTime - 10);
          }
        } else if (this.currentView === 'shorts') {
          if (e.key === 'ArrowDown') {
            this.shortsContainer.scrollBy({ top: 640, behavior: 'smooth' });
          } else if (e.key === 'ArrowUp') {
            this.shortsContainer.scrollBy({ top: -640, behavior: 'smooth' });
          }
        }
      });

      // Advanced Pro Polish Modules
      this.initScrubBufferAndTooltip();
      this.initChaptersEvents();
      this.initCommentsSortingEvents();
      this.initShortsCommentsEvents();
      this.initVideoContextMenu();
      this.initPlayerWheelVolume();
      this.initCardContextMenu();
      this.initNetworkStatusWatcher();

      if (this.btnChannelPageSub) {
        this.btnChannelPageSub.addEventListener('click', () => {
          this.isSubscribed = !this.isSubscribed;
          this.btnChannelPageSub.textContent = this.isSubscribed ? "Obuna bo'lindi" : "Obuna bo'lish";
          this.btnChannelPageSub.className = `yt-subscribe-btn ${this.isSubscribed ? 'subscribed' : ''}`;
          const chName = this.channelPageTitle ? this.channelPageTitle.textContent : "Kanal";
          this.showToast(this.isSubscribed ? `"${chName}" kanaliga obuna bo'lindi!` : `"${chName}" obunasi bekor qilindi`);
        });
      }
      this.init2xSpeedHold();
      this.initNotificationsEvents();
      this.initUserProfileEvents();
      this.initKeyboardShortcutsGlobal();
      this.initSleepTimerDropdown();
      this.initRecentSearches();
      this.initSubtitlesMenuEvents();
      this.initChannelPageEvents();
      this.initHistoryPageEvents();
      this.initShortsSoundModalEvents();
      this.initPhoneConnect();
    }

    applyVideoFilter(filterName) {
      if (filterName === 'cinema') {
        this.videoElement.style.filter = 'contrast(1.18) saturate(1.28)';
        this.showToast("Filtr: 🎬 Kinozali (Cinema)");
      } else if (filterName === 'night') {
        this.videoElement.style.filter = 'sepia(0.35) brightness(0.92)';
        this.showToast("Filtr: 🌙 Ko'z himoyasi (Warm)");
      } else if (filterName === 'vibrant') {
        this.videoElement.style.filter = 'saturate(1.45) contrast(1.05)';
        this.showToast("Filtr: 🌈 O'ta Yorqin (Vibrant)");
      } else if (filterName === 'bw') {
        this.videoElement.style.filter = 'grayscale(1) contrast(1.2)';
        this.showToast("Filtr: 🎞️ Oq-Qora Retro (B&W)");
      } else {
        this.videoElement.style.filter = 'none';
        this.showToast("Filtr: 🎨 Oddiy (Normal)");
      }
    }

    toggleAbLoop() {
      const cur = Math.floor(this.videoElement.currentTime);
      if (this.loopA === null) {
        this.loopA = cur;
        this.btnAbLoop.textContent = `[A:${cur}s - B]`;
        this.btnAbLoop.style.background = 'var(--yt-blue)';
        this.btnAbLoop.style.color = '#000';
        this.showToast(`A-B Loop: Boshlanish nuqtasi [A = ${this.formatTime(cur)}] qo'yildi! Endi [B] nuqtada bosing.`);
      } else if (this.loopB === null) {
        if (cur <= this.loopA) {
          this.showToast("[B] nuqtasi [A] dan keyin bo'lishi kerak!");
          return;
        }
        this.loopB = cur;
        this.btnAbLoop.textContent = `[A-B: ${this.formatTime(this.loopA)}-${this.formatTime(this.loopB)}]`;
        this.btnAbLoop.style.background = 'var(--yt-red)';
        this.btnAbLoop.style.color = '#fff';
        this.videoElement.currentTime = this.loopA;
        this.showToast(`A-B Loop faollashdi: ${this.formatTime(this.loopA)} dan ${this.formatTime(this.loopB)} gacha uzluksiz takrorlanadi!`);
      } else {
        this.loopA = null;
        this.loopB = null;
        this.btnAbLoop.textContent = '[A-B]';
        this.btnAbLoop.style.background = 'transparent';
        this.btnAbLoop.style.color = 'inherit';
        this.showToast("A-B Loop to'xtatildi.");
      }
    }

    toggleStatsNerds() {
      this.statsNerdsBox.style.display = this.statsNerdsBox.style.display === 'none' ? 'block' : 'none';
      if (this.statsNerdsBox.style.display === 'block') {
        this.updateStatsContent();
      }
    }

    updateStatsContent() {
      if (!this.statsContent || !this.currentVideo) return;
      this.statsContent.innerHTML = `
        Video ID: ${this.currentVideo.id}<br>
        Rezolyutsiya: ${this.videoElement.videoWidth || 1920}x${this.videoElement.videoHeight || 1080}@60fps<br>
        Ovoz Quvvati: ${(this.audioBoostLevel * 100).toFixed(0)}% (Gain Boost)<br>
        Vaqt: ${this.videoElement.currentTime.toFixed(1)}s / ${(this.videoElement.duration || 0).toFixed(1)}s<br>
        Loop A-B: ${this.loopA !== null ? `${this.loopA}s` : 'Off'} -> ${this.loopB !== null ? `${this.loopB}s` : 'Off'}<br>
        Tezlik: ${this.videoElement.playbackRate}x<br>
        Dvigatel: MuzaffarZed Core v3.5 (Zero-Defect)
      `;
    }

    saveNote() {
      if (!this.currentVideo) return;
      const text = this.noteInput.value.trim();
      if (!text) return;

      const cur = Math.floor(this.videoElement.currentTime);
      const notes = JSON.parse(localStorage.getItem(`yt_notes_${this.currentVideo.id}`) || '[]');
      notes.push({
        id: `note_${Date.now()}`,
        time: cur,
        formattedTime: this.formatTime(cur),
        text: text
      });
      localStorage.setItem(`yt_notes_${this.currentVideo.id}`, JSON.stringify(notes));
      this.noteInput.value = '';
      this.renderNotes();
      this.showToast("Qayd saqlandi! ✍️");
    }

    renderNotes() {
      if (!this.currentVideo || !this.notesList) return;
      const notes = JSON.parse(localStorage.getItem(`yt_notes_${this.currentVideo.id}`) || '[]');
      this.notesList.innerHTML = '';

      if (notes.length === 0) {
        this.notesList.innerHTML = '<span style="color: var(--yt-text-secondary); font-size: 12px;">Hozircha qaydlar yo\'q. Video davomida muhim nuqtalarni yozib boring.</span>';
        return;
      }

      notes.forEach((n, idx) => {
        const item = document.createElement('div');
        item.className = 'yt-note-item';
        item.innerHTML = `
          <div>
            <span class="yt-note-time">${n.formattedTime}</span>
            <span>${n.text}</span>
          </div>
          <button style="background: transparent; border: none; color: #ff5555; cursor: pointer;">✕</button>
        `;
        item.querySelector('.yt-note-time').addEventListener('click', () => {
          this.videoElement.currentTime = n.time;
          this.videoElement.play();
          this.showToast(`O'tildi: ${n.formattedTime}`);
        });
        item.querySelector('button').addEventListener('click', () => {
          notes.splice(idx, 1);
          localStorage.setItem(`yt_notes_${this.currentVideo.id}`, JSON.stringify(notes));
          this.renderNotes();
        });
        this.notesList.appendChild(item);
      });
    }

    openChannelPage(channel) {
      if (typeof channel === 'string') {
        const foundVid = this.videos.find(v => v.channel && (v.channel.id === channel || v.channel.name.toLowerCase().includes(channel.toLowerCase())));
        if (foundVid) channel = foundVid.channel;
        else channel = { id: channel, name: "MuzaffarZed Tech", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", subscribers: "1.4M obunachi" };
      }

      this.currentChannel = channel;
      this.switchView('channel');

      if (this.channelAboutSection) this.channelAboutSection.style.display = 'none';
      if (this.channelVideosGrid) this.channelVideosGrid.style.display = 'grid';

      this.channelPageAvatar.src = channel.avatar;
      this.channelPageTitle.textContent = channel.name;
      this.channelPageMeta.textContent = `@${channel.name.toLowerCase().replace(/\s+/g, '')} • ${channel.subscribers || '1.2M obunachi'} • MuzaffarZed Verified`;
      
      const isSub = this.subscribedChannels.has(channel.id);
      this.btnChannelPageSub.textContent = isSub ? "Obuna bo'lindi" : "Obuna bo'lish";
      this.btnChannelPageSub.className = `yt-subscribe-btn ${isSub ? 'subscribed' : ''}`;

      const channelVideos = this.videos.filter(v => v.channel && (v.channel.name === channel.name || v.channel.id === channel.id));
      this.renderChannelVideosList(channelVideos);
      this.refreshIcons();
    }

    renderChannelVideosList(videos) {
      this.channelVideosGrid.innerHTML = '';
      if (videos.length === 0) {
        this.channelVideosGrid.innerHTML = '<p style="color: var(--yt-text-secondary); padding: 40px;">Bu kanalda hali videolar yo\'q.</p>';
      } else {
        videos.forEach(v => {
          const card = document.createElement('div');
          card.className = 'yt-card';
          card.innerHTML = `
            <div class="yt-thumbnail-wrapper">
              <img src="${v.thumbnail}" class="yt-thumbnail-img" alt="${v.title}">
              <span class="yt-duration-badge">${v.duration}</span>
            </div>
            <div class="yt-card-details">
              <div class="yt-card-meta">
                <h3 class="yt-card-title">${v.title}</h3>
                <div class="yt-card-views">${v.views} • ${v.timestamp}</div>
              </div>
            </div>
          `;
          card.addEventListener('click', () => this.openWatch(v));
          this.channelVideosGrid.appendChild(card);
        });
      }
    }

    openHistoryView() {
      this.switchView('history');
      this.renderHistoryList();
    }

    renderHistoryList(filterQuery = '') {
      const historyIds = this.watchHistory;
      let historyVideos = historyIds.map(id => this.videos.find(v => v.id === id)).filter(Boolean);

      if (filterQuery) {
        const q = filterQuery.toLowerCase();
        historyVideos = historyVideos.filter(v => v.title.toLowerCase().includes(q) || v.channel.name.toLowerCase().includes(q));
      }

      this.historyVideosGrid.innerHTML = '';
      if (historyVideos.length === 0) {
        this.historyVideosGrid.innerHTML = '<p style="color: var(--yt-text-secondary); padding: 40px;">Ko\'rishlar tarixi bo\'sh.</p>';
      } else {
        historyVideos.forEach(v => {
          const card = document.createElement('div');
          card.className = 'yt-card';
          card.style.position = 'relative';
          card.innerHTML = `
            <div class="yt-thumbnail-wrapper">
              <img src="${v.thumbnail}" class="yt-thumbnail-img" alt="${v.title}">
              <span class="yt-duration-badge">${v.duration}</span>
              <button class="yt-history-card-remove" title="Tarixdan o'chirish">✕</button>
            </div>
            <div class="yt-card-details">
              <div class="yt-card-meta">
                <h3 class="yt-card-title">${v.title}</h3>
                <div class="yt-card-channel-name">${v.channel.name}</div>
                <div class="yt-card-views">${v.views} • ${v.timestamp}</div>
              </div>
            </div>
          `;

          const removeBtn = card.querySelector('.yt-history-card-remove');
          removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.watchHistory = this.watchHistory.filter(id => id !== v.id);
            localStorage.setItem('yt_history', JSON.stringify(this.watchHistory));
            card.remove();
            this.showToast("Video tarixdan o'chirildi!");
          });

          card.addEventListener('click', () => this.openWatch(v));
          this.historyVideosGrid.appendChild(card);
        });
      }
      this.refreshIcons();
    }

    setSleepTimer(minutes) {
      clearTimeout(this.sleepTimerTimeout);
      clearInterval(this.sleepTimerInterval);
      this.sleepTimerMinutes = minutes;
      if (minutes > 0) {
        this.btnSleepTimer.style.color = 'var(--yt-blue)';
        if (this.sleepTimerBadge) {
          this.sleepTimerBadge.style.display = 'block';
          this.sleepTimerBadge.textContent = `${minutes}m`;
        }
        this.showToast(`Uxlatish taymeri: ${minutes} daqiqa`);
        let remainingSeconds = minutes * 60;
        this.sleepTimerInterval = setInterval(() => {
          remainingSeconds -= 60;
          if (remainingSeconds <= 0) {
            clearInterval(this.sleepTimerInterval);
            if (this.sleepTimerBadge) this.sleepTimerBadge.style.display = 'none';
          } else if (this.sleepTimerBadge) {
            this.sleepTimerBadge.textContent = `${Math.ceil(remainingSeconds / 60)}m`;
          }
        }, 60000);

        this.sleepTimerTimeout = setTimeout(() => {
          this.videoElement.pause();
          this.showToast("Uxlatish taymeri ishladi: video to'xtatildi 💤");
          this.setSleepTimer(0);
        }, minutes * 60 * 1000);
      } else {
        this.btnSleepTimer.style.color = 'inherit';
        if (this.sleepTimerBadge) this.sleepTimerBadge.style.display = 'none';
        this.showToast("Uxlatish taymeri o'chirildi");
      }
    }

    async openPlaylistModal() {
      if (!this.currentVideo) return;
      this.playlistModal.classList.add('open');
      this.playlistOptionsList.innerHTML = '<p style="color: var(--yt-text-secondary); font-size: 13px;">Playlistlar yuklanmoqda...</p>';

      try {
        const res = await fetch(`${API_BASE}/api/playlists`);
        const json = await res.json();
        if (json.success && json.playlists.length > 0) {
          this.playlistOptionsList.innerHTML = '';
          json.playlists.forEach(pl => {
            const row = document.createElement('div');
            row.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 8px; border-radius: 6px; background: var(--yt-surface); cursor: pointer;";
            row.innerHTML = `
              <span style="font-size: 14px; font-weight: 500;">${pl.name}</span>
              <button class="yt-btn-primary" style="padding: 4px 10px; font-size: 12px;">+ Saqlash</button>
            `;
            row.querySelector('button').addEventListener('click', async () => {
              await fetch(`${API_BASE}/api/playlists/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  playlist_id: pl.id,
                  video_id: this.currentVideo.id,
                  title: this.currentVideo.title,
                  thumbnail: this.currentVideo.thumbnail
                })
              });
              this.showToast(`"${pl.name}" playlistiga saqlandi!`);
              this.playlistModal.classList.remove('open');
            });
            this.playlistOptionsList.appendChild(row);
          });
        }
      } catch (e) {
        this.playlistOptionsList.innerHTML = '<p style="font-size: 13px; color: var(--yt-text-secondary);">Standart playlistlar tayyor.</p>';
      }
    }

    async createCustomPlaylist() {
      const name = this.newPlaylistNameInput.value.trim();
      if (!name) return;
      try {
        const res = await fetch(`${API_BASE}/api/playlists`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        });
        const data = await res.json();
        if (data.success) {
          this.newPlaylistNameInput.value = '';
          this.openPlaylistModal();
          this.showToast(`Yangi "${name}" playlisti yaratildi!`);
        }
      } catch (e) {}
    }

    async fetchSuggestions(q) {
      if (!q || q.length < 2) {
        this.suggestionsDropdown.style.display = 'none';
        return;
      }
      try {
        const res = await fetch(`${API_BASE}/api/suggest?q=${encodeURIComponent(q)}`);
        const json = await res.json();
        if (json.success && json.suggestions.length > 0) {
          this.suggestionsDropdown.innerHTML = '';
          json.suggestions.forEach(sug => {
            const row = document.createElement('div');
            row.className = 'yt-suggestion-item';
            row.innerHTML = `
              <i data-lucide="search" style="width: 16px; height: 16px; color: var(--yt-text-secondary); flex-shrink: 0;"></i>
              <span>${sug}</span>
            `;
            row.addEventListener('click', () => {
              this.searchInput.value = sug;
              this.searchQuery = sug;
              this.suggestionsDropdown.style.display = 'none';
              this.switchView('home');
              this.performSearch(sug);
            });
            this.suggestionsDropdown.appendChild(row);
          });
          this.suggestionsDropdown.style.display = 'block';
          this.refreshIcons();
        } else {
          this.suggestionsDropdown.style.display = 'none';
        }
      } catch (e) {
        this.suggestionsDropdown.style.display = 'none';
      }
    }

    async performSearch(query) {
      if (!query) {
        this.renderVideoGrid();
        return;
      }
      this.videoGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--yt-text-secondary);">
          <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.2); border-top-color: var(--yt-red); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <p style="margin-top: 14px; font-weight: 500;">YouTube bo'yicha qidirilmoqda: "${query}"...</p>
        </div>
      `;
      try {
        const res = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(query)}&limit=16`);
        const json = await res.json();
        if (json.success && json.results.length > 0) {
          this.renderCustomGrid(json.results, "Natija topilmadi", "Boshqa so'z bilan qidirib ko'ring.");
        } else {
          this.renderVideoGrid();
        }
      } catch (e) {
        this.renderVideoGrid();
      }
    }

    async generateAiSummary() {
      if (!this.currentVideo) return;
      this.aiSummaryCard.style.display = 'block';
      this.aiSummaryContent.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.2); border-top-color: #3ea6ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <span>Sun'iy intellekt videoni tahlil qilmoqda...</span>
        </div>
      `;
      try {
        const res = await fetch(`${API_BASE}/api/ai/summarize`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.currentVideo.title,
            description: this.currentVideo.description
          })
        });
        const data = await res.json();
        if (data.success) {
          this.aiSummaryContent.innerHTML = data.summary.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        }
      } catch (e) {
        this.aiSummaryContent.textContent = "AI tahlil serveriga ulanishda xatolik yuz berdi.";
      }
      this.refreshIcons();
    }

    async handleAiChat() {
      const q = this.aiChatInput.value.trim();
      if (!q || !this.currentVideo) return;

      this.aiChatAnswer.style.display = 'block';
      this.aiChatAnswer.textContent = "AI javob tayyorlamoqda...";

      try {
        const res = await fetch(`${API_BASE}/api/ai/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: this.currentVideo.title,
            question: q
          })
        });
        const data = await res.json();
        if (data.success) {
          this.aiChatAnswer.innerHTML = data.reply.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        }
      } catch (e) {
        this.aiChatAnswer.textContent = "Javob olishda xatolik.";
      }
    }

    async triggerDownload(dlType) {
      if (!this.currentVideo) return;
      this.downloadDropdown.style.display = 'none';
      this.showToast(`Yuklab olish boshlandi: ${dlType.toUpperCase()}`);

      try {
        const res = await fetch(`${API_BASE}/api/download/${this.currentVideo.id}?type=${dlType}`);
        const data = await res.json();
        if (data.success) {
          this.showToast(data.message);
        }
      } catch (e) {
        this.showToast("Yuklab olish buyrug'i yuborildi!");
      }
    }

    dockMiniplayer(enable) {
      this.miniplayerActive = enable;
      if (enable && this.currentVideo && !this.videoElement.paused) {
        this.miniplayerDock.style.display = 'flex';
        this.miniplayerTitle.textContent = this.currentVideo.title;
        this.miniplayerVideo.src = this.videoElement.src;
        this.miniplayerVideo.currentTime = this.videoElement.currentTime;
        this.miniplayerVideo.play().catch(() => {});
      } else {
        this.miniplayerDock.style.display = 'none';
        this.miniplayerVideo.pause();
      }
      this.refreshIcons();
    }

    renderCategoryChips() {
      this.chipsContainer.innerHTML = '';
      categories.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = `yt-chip ${cat === this.currentCategory ? 'active' : ''}`;
        chip.textContent = cat;
        chip.addEventListener('click', () => {
          this.selectCategory(cat);
        });
        this.chipsContainer.appendChild(chip);
      });
    }

    selectCategory(cat) {
      this.currentCategory = cat;
      this.renderCategoryChips();
      this.switchView('home');
      if (cat !== 'All') {
        this.performSearch(cat);
      } else {
        this.renderVideoGrid();
      }
    }


    // --- MUZAFFARZED SUPREME FEATURES ---

    toggleTheaterMode() {
      const isTheater = this.viewWatch.classList.toggle('theater-mode-active');
      this.playerContainer.classList.toggle('theater-mode', isTheater);
      this.showToast(isTheater ? "Kinoteatr rejimi faollashdi (t)" : "Oddiy rejimga qaytildi (t)");
      this.refreshIcons();
    }

    async toggleNativePip() {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
          this.showToast("Picture-in-Picture rejimi yopildi");
        } else if (document.pictureInPictureEnabled && !this.videoElement.paused) {
          await this.videoElement.requestPictureInPicture();
          this.showToast("Picture-in-Picture rejimi faol (p)");
        }
      } catch (err) {
        this.showToast("Picture-in-Picture qo'llab-quvvatlanmadi");
      }
    }

    showVolumeHud(percent, isMuted = false) {
      if (!this.volumeHud) return;
      this.volumeHud.style.display = 'flex';
      this.volumeHudLevel.textContent = isMuted ? 'Ovozsiz' : `${Math.round(percent * 100)}%`;
      if (isMuted || percent === 0) {
        this.volumeHudIcon.setAttribute('data-lucide', 'volume-x');
      } else if (percent < 0.5) {
        this.volumeHudIcon.setAttribute('data-lucide', 'volume-1');
      } else {
        this.volumeHudIcon.setAttribute('data-lucide', 'volume-2');
      }
      this.refreshIcons();
      clearTimeout(this.volumeHudTimeout);
      this.volumeHudTimeout = setTimeout(() => {
        this.volumeHud.style.display = 'none';
      }, 1400);
    }

    startVoiceSearch() {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!this.voiceSearchModal) return;
      this.voiceSearchModal.classList.add('open');
      this.voiceStatusTitle.textContent = "Tinglanmoqda...";
      this.voiceInterimText.textContent = "";

      if (!SpeechRec) {
        this.voiceStatusTitle.textContent = "Ovozli qidiruv qo'llab-quvvatlanmadi";
        this.voiceInterimText.textContent = "Iltimos, Chrome yoki Edge brauzeridan foydalaning.";
        return;
      }

      if (this.recognition) {
        try { this.recognition.abort(); } catch (e) {}
      }

      this.recognition = new SpeechRec();
      this.recognition.lang = this.currentLang === 'UZ' ? 'uz-UZ' : 'en-US';
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(res => res[0].transcript)
          .join('');
        this.voiceInterimText.textContent = transcript;
        if (event.results[0].isFinal) {
          this.searchInput.value = transcript;
          this.searchQuery = transcript;
          setTimeout(() => {
            this.voiceSearchModal.classList.remove('open');
            this.switchView('home');
            this.performSearch(transcript);
          }, 600);
        }
      };

      this.recognition.onerror = () => {
        this.voiceStatusTitle.textContent = "Ovoz aniqlanmadi";
        this.voiceInterimText.textContent = "Qayta urinib ko'ring yoki mikrofonni tekshiring.";
      };

      try {
        this.recognition.start();
      } catch (err) {
        console.warn(err);
      }
    }

    updateShareUrl() {
      if (!this.currentVideo) return;
      let url = `${window.location.origin}/?v=${this.currentVideo.id}`;
      const cur = Math.floor(this.videoElement.currentTime || 0);
      if (this.shareCurrentTimeLabel) {
        this.shareCurrentTimeLabel.textContent = this.formatTime(cur);
      }
      if (this.shareTimestampChk && this.shareTimestampChk.checked) {
        url += `&t=${cur}`;
      }
      this.shareLinkInput.value = url;
    }

    openClipModal() {
      if (!this.currentVideo) {
        this.showToast("Avval videoni oching!");
        return;
      }
      const cur = Math.floor(this.videoElement.currentTime || 0);
      this.clipStartTime = cur;
      this.clipEndTime = Math.min(Math.floor(this.videoElement.duration || 60), cur + 15);
      if (this.clipTitleInput) {
        this.clipTitleInput.value = `${this.currentVideo.title} (Klip)`;
      }
      this.updateClipLabels();
      this.clipModal.classList.add('open');
      this.refreshIcons();
    }

    updateClipLabels() {
      if (this.clipStartLabel) this.clipStartLabel.textContent = this.formatTime(this.clipStartTime);
      if (this.clipEndLabel) this.clipEndLabel.textContent = this.formatTime(this.clipEndTime);
      const dur = Math.max(1, this.clipEndTime - this.clipStartTime);
      if (this.clipDurationLabel) this.clipDurationLabel.textContent = `${dur} soniya`;
    }

    previewClip() {
      this.videoElement.currentTime = this.clipStartTime;
      this.videoElement.play();
      this.clipModal.classList.remove('open');
      this.showToast(`Klip sinovi: ${this.formatTime(this.clipStartTime)} dan ${this.formatTime(this.clipEndTime)} gacha`);
      const checkClipLoop = () => {
        if (this.videoElement.currentTime >= this.clipEndTime) {
          this.videoElement.pause();
          this.videoElement.removeEventListener('timeupdate', checkClipLoop);
        }
      };
      this.videoElement.addEventListener('timeupdate', checkClipLoop);
    }

    shareClip() {
      const url = `${window.location.origin}/?v=${this.currentVideo.id}&clip_start=${this.clipStartTime}&clip_end=${this.clipEndTime}`;
      navigator.clipboard.writeText(url).then(() => {
        this.clipModal.classList.remove('open');
        this.showToast("Klip havolasi nusxalandi! ✂️");
      });
    }

    async openPlaylistView(playlistId = 'pl-watch-later', playlistName = "Keyinroq ko'rish") {
      this.switchView('playlist');
      this.currentPlaylistId = playlistId;
      if (this.playlistViewTitle) this.playlistViewTitle.textContent = playlistName;
      if (this.playlistItemsContainer) {
        this.playlistItemsContainer.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--yt-text-secondary);"><p>Yuklanmoqda...</p></div>';
      }

      try {
        const res = await fetch(`${API_BASE}/api/playlists/${playlistId}/items`);
        const json = await res.json();
        this.currentPlaylistItems = json.items || [];
        if (this.playlistViewCount) this.playlistViewCount.textContent = `${this.currentPlaylistItems.length} ta video`;
        this.renderPlaylistItems();
      } catch (e) {
        if (this.playlistItemsContainer) {
          this.playlistItemsContainer.innerHTML = "<p style='padding: 30px; color: var(--yt-text-secondary);'>Playlist ma'lumotlarini yuklab bo'lmadi.</p>";
        }
      }
    }

    renderPlaylistItems() {
      if (!this.playlistItemsContainer) return;
      this.playlistItemsContainer.innerHTML = '';
      if (this.currentPlaylistItems.length === 0) {
        this.playlistItemsContainer.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; color: var(--yt-text-secondary);">
            <i data-lucide="folder-open" style="width: 48px; height: 48px; margin-bottom: 12px;"></i>
            <h3>Ushbu playlist bo'sh</h3>
            <p style="margin-top: 6px; font-size: 13px;">Videolarni tomosha qilish sahifasidagi 'Saqlash' tugmasi orqali qo'shing.</p>
          </div>
        `;
        this.refreshIcons();
        return;
      }

      this.currentPlaylistItems.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'yt-playlist-item-row';
        row.innerHTML = `
          <div class="yt-playlist-item-idx">${idx + 1}</div>
          <img src="${item.thumbnail || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80'}" class="yt-playlist-item-thumb" alt="${item.title}">
          <div class="yt-playlist-item-details">
            <div class="yt-playlist-item-title">${item.title}</div>
            <div class="yt-playlist-item-time">Qo'shilgan: ${item.added_at ? item.added_at.slice(0, 10) : 'Yaqinda'}</div>
          </div>
          <button class="yt-icon-btn btn-del-item" title="Playlistdan o'chirish" style="color: #ff5555;">
            <i data-lucide="trash-2" style="width: 18px; height: 18px;"></i>
          </button>
        `;

        row.addEventListener('click', (e) => {
          if (e.target.closest('.btn-del-item')) return;
          const found = this.videos.find(v => v.id === item.video_id);
          if (found) {
            this.openWatch(found);
          } else {
            this.openWatch({
              id: item.video_id,
              title: item.title,
              thumbnail: item.thumbnail,
              duration: '10:00',
              views: '120K',
              timestamp: 'Yaqinda',
              channel: { id: 'yt-channel', name: 'YouTube Video', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', subscribers: '100K' }
            });
          }
        });

        const delBtn = row.querySelector('.btn-del-item');
        delBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          try {
            await fetch(`${API_BASE}/api/playlists/${this.currentPlaylistId}/items/${item.video_id}`, { method: 'DELETE' });
            this.currentPlaylistItems = this.currentPlaylistItems.filter(i => i.video_id !== item.video_id);
            if (this.playlistViewCount) this.playlistViewCount.textContent = `${this.currentPlaylistItems.length} ta video`;
            this.renderPlaylistItems();
            this.showToast("Video playlistdan o'chirildi");
          } catch (err) {
            this.showToast("O'chirishda xatolik yuz berdi");
          }
        });

        this.playlistItemsContainer.appendChild(row);
      });
      this.refreshIcons();
    }

    playAllPlaylist() {
      if (!this.currentPlaylistItems || this.currentPlaylistItems.length === 0) {
        this.showToast("Playlistda video yo'q!");
        return;
      }
      const firstItem = this.currentPlaylistItems[0];
      const found = this.videos.find(v => v.id === firstItem.video_id) || {
        id: firstItem.video_id,
        title: firstItem.title,
        thumbnail: firstItem.thumbnail,
        duration: '10:00',
        views: '120K',
        timestamp: 'Yaqinda',
        channel: { id: 'yt-channel', name: 'YouTube Video', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80', subscribers: '100K' }
      };
      this.openWatch(found);
      this.showToast("Playlist ijro etilmoqda...");
    }

    async deleteEntirePlaylist() {
      if (!this.currentPlaylistId || this.currentPlaylistId === 'pl-watch-later') {
        this.showToast("Standart playlistni o'chirib bo'lmaydi!");
        return;
      }
      if (!confirm("Ushbu playlistni to'liq o'chirmoqchimisiz?")) return;
      try {
        await fetch(`${API_BASE}/api/playlists/${this.currentPlaylistId}`, { method: 'DELETE' });
        this.showToast("Playlist o'chirildi!");
        this.switchView('home');
      } catch (err) {
        this.showToast("O'chirishda xatolik yuz berdi");
      }
    }

    handleVideoEnded() {
      if (!this.autoplayActive) {
        this.showToast("Video yakunlandi (Avtomatik ijro o'chiq)");
        return;
      }
      const curIdx = this.videos.findIndex(v => v.id === this.currentVideo?.id);
      const nextIdx = (curIdx + 1) % this.videos.length;
      const nextVideo = this.videos[nextIdx];
      if (!nextVideo) return;

      if (this.autoplayNextThumb) this.autoplayNextThumb.src = nextVideo.thumbnail;
      if (this.autoplayNextTitle) this.autoplayNextTitle.textContent = nextVideo.title;
      if (this.autoplayNextChannel) this.autoplayNextChannel.textContent = nextVideo.channel.name;
      if (this.autoplayOverlay) this.autoplayOverlay.style.display = 'flex';

      let count = 5;
      if (this.autoplayCountdownNumber) this.autoplayCountdownNumber.textContent = count;
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = setInterval(() => {
        count--;
        if (count <= 0) {
          clearInterval(this.autoplayTimer);
          if (this.autoplayOverlay) this.autoplayOverlay.style.display = 'none';
          this.openWatch(nextVideo);
        } else if (this.autoplayCountdownNumber) {
          this.autoplayCountdownNumber.textContent = count;
        }
      }, 1000);
    }

    openWatchPartyModal() {
      if (this.watchPartyModal) this.watchPartyModal.classList.add('open');
      if (this.partySocket && this.partySocket.readyState === WebSocket.OPEN) {
        if (this.partyDisconnectedView) this.partyDisconnectedView.style.display = 'none';
        if (this.partyConnectedView) this.partyConnectedView.style.display = 'block';
      } else {
        if (this.partyDisconnectedView) this.partyDisconnectedView.style.display = 'block';
        if (this.partyConnectedView) this.partyConnectedView.style.display = 'none';
      }
    }

    joinWatchParty(roomId) {
      if (!roomId) roomId = `party-${Math.floor(1000 + Math.random() * 9000)}`;
      this.currentPartyRoom = roomId;

      const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${wsProtocol}//${window.location.host}/ws/party/${roomId}`;

      try {
        if (this.partySocket) {
          try { this.partySocket.close(); } catch (e) {}
        }
        this.partySocket = new WebSocket(wsUrl);

        this.partySocket.onopen = () => {
          if (this.activeRoomCode) this.activeRoomCode.textContent = roomId;
          if (this.partyDisconnectedView) this.partyDisconnectedView.style.display = 'none';
          if (this.partyConnectedView) this.partyConnectedView.style.display = 'block';
          this.showToast(`Watch Party xonasiga ulandi: ${roomId} 👥`);
          this.appendPartyChat("Tizim", `Xonaga xush kelibsiz! Do'stlarni taklif qiling (Kod: ${roomId})`);
        };

        this.partySocket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.type === 'user_joined') {
              if (this.activePartyMembersCount) this.activePartyMembersCount.textContent = `${data.count} kishi`;
              this.appendPartyChat("Tizim", "Yangi ishtirokchi xonaga qo'shildi! 👋");
            } else if (data.type === 'user_left') {
              if (this.activePartyMembersCount) this.activePartyMembersCount.textContent = `${data.count} kishi`;
              this.appendPartyChat("Tizim", "Ishtirokchi xonadan chiqdi.");
            } else if (data.type === 'play') {
              this.videoElement.currentTime = data.time;
              this.videoElement.play().catch(() => {});
              this.showToast("Do'stingiz ijroni boshladi ▶️");
            } else if (data.type === 'pause') {
              this.videoElement.currentTime = data.time;
              this.videoElement.pause();
              this.showToast("Do'stingiz videoni to'xtatdi ⏸️");
            } else if (data.type === 'seek') {
              this.videoElement.currentTime = data.time;
              this.showToast(`Sinxronlandi: ${this.formatTime(Math.floor(data.time))}`);
            } else if (data.type === 'chat') {
              this.appendPartyChat(data.sender || "Do'st", data.text);
            }
          } catch (e) {}
        };

        this.partySocket.onclose = () => {
          if (this.partyDisconnectedView) this.partyDisconnectedView.style.display = 'block';
          if (this.partyConnectedView) this.partyConnectedView.style.display = 'none';
        };
      } catch (err) {
        this.showToast("Watch Party ulanishida xatolik yuz berdi");
      }
    }

    sendPartyAction(type) {
      if (this.partySocket && this.partySocket.readyState === WebSocket.OPEN) {
        this.partySocket.send(JSON.stringify({
          type: type,
          time: this.videoElement.currentTime || 0
        }));
      }
    }

    sendPartyChat() {
      if (!this.partyChatInput) return;
      const text = this.partyChatInput.value.trim();
      if (!text || !this.partySocket) return;
      this.partySocket.send(JSON.stringify({
        type: 'chat',
        text: text,
        sender: 'MuzaffarZed'
      }));
      this.appendPartyChat("Men", text);
      this.partyChatInput.value = '';
    }

    appendPartyChat(sender, text) {
      if (!this.partyChatMessages) return;
      const msg = document.createElement('div');
      msg.innerHTML = `<b style="color: var(--yt-blue);">${sender}:</b> <span>${text}</span>`;
      this.partyChatMessages.appendChild(msg);
      this.partyChatMessages.scrollTop = this.partyChatMessages.scrollHeight;
    }

    leaveParty() {
      if (this.partySocket) {
        this.partySocket.close();
      }
      this.currentPartyRoom = null;
      if (this.watchPartyModal) this.watchPartyModal.classList.remove('open');
      this.showToast("Watch Party yakunlandi");
    }


    
    handleUrlParams() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const videoId = urlParams.get('v');
        const timeParam = urlParams.get('t');
        if (videoId) {
          const found = this.videos.find(v => v.id === videoId);
          if (found) {
            this.openWatch(found);
            if (timeParam && this.videoElement) {
              const sec = parseInt(timeParam);
              if (!isNaN(sec)) {
                setTimeout(() => {
                  if (this.videoElement) this.videoElement.currentTime = sec;
                }, 300);
              }
            }
          }
        }
      } catch (e) {}
    }

    initPwa() {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').catch(() => {});
        });
      }

      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
        if (this.btnInstallPwa) {
          this.btnInstallPwa.style.display = 'flex';
          this.refreshIcons();
        }
      });

      if (this.btnInstallPwa) {
        this.btnInstallPwa.addEventListener('click', async () => {
          if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            if (outcome === 'accepted') {
              this.btnInstallPwa.style.display = 'none';
              this.showToast("YouTube Pro o'rnatildi! 🎉");
            }
            this.deferredPrompt = null;
          } else {
            this.showToast("Brauzer menyusidan 'Ilovani o'rnatish' tugmasini bosing.");
          }
        });
      }
    }

    renderVideoGrid() {
      this.videoGrid.innerHTML = '';
      let filtered = this.videos;

      if (this.currentCategory !== 'All') {
        filtered = filtered.filter(v => v.category === this.currentCategory);
      }

      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        filtered = filtered.filter(v => 
          v.title.toLowerCase().includes(q) || 
          v.channel.name.toLowerCase().includes(q)
        );
      }

      this.renderCustomGrid(filtered, "Video topilmadi", "Qidiruv so'zini yoki kategoriyani o'zgartirib ko'ring.");
    }

    async openWatch(video) {
      this.dockMiniplayer(false);
      this.currentVideo = video;
      this.switchView('watch');

      // Add to history
      if (!this.watchHistory.includes(video.id)) {
        this.watchHistory.unshift(video.id);
        localStorage.setItem('yt_history', JSON.stringify(this.watchHistory.slice(0, 50)));
      }

      this.watchTitle.textContent = video.title;
      this.watchChannelAvatar.src = video.channel.avatar;
      this.watchChannelName.textContent = video.channel.name;
      this.watchChannelSubs.textContent = video.channel.subscribers;
      this.watchViewsCount.textContent = video.views;
      this.watchPublishedDate.textContent = video.publishedDate || video.timestamp;
      this.renderDescriptionWithTimestamps(video.description);
      this.updateSubscribeButtonState(video.channel.id);
      this.updateLikeButtonState(video);
      this.renderComments(video);
      this.renderRelatedVideos(video);
      this.renderNotes();

      let streamUrl = video.videoUrl;
      let isEmbed = false;

      if (!streamUrl || !streamUrl.endsWith('.mp4')) {
        try {
          const res = await fetch(`${API_BASE}/api/stream/${video.id}`);
          const streamData = await res.json();
          if (streamData.success) {
            if (streamData.direct && streamData.stream_url) {
              streamUrl = streamData.stream_url;
            } else if (streamData.stream_url) {
              streamUrl = streamData.stream_url;
              isEmbed = true;
            }
          }
        } catch (e) {
          streamUrl = `https://www.youtube-nocookie.com/embed/{video.id}?autoplay=1`;
          isEmbed = true;
        }
      }

      if (isEmbed) {
        this.videoElement.style.display = 'none';
        this.embedElement.style.display = 'block';
        this.embedElement.src = streamUrl;
      } else {
        this.embedElement.style.display = 'none';
        this.videoElement.style.display = 'block';
        this.videoElement.src = streamUrl;
        this.videoElement.load();
        const savedProg = this.videoProgress && this.videoProgress[video.id];
        if (savedProg && savedProg.time > 5 && savedProg.duration && savedProg.time < savedProg.duration - 10) {
          const onCanPlay = () => {
            this.videoElement.currentTime = savedProg.time;
            this.showToast(`Qolgan joyidan davom ettirilmoqda (${this.formatTime(savedProg.time)})`);
            this.videoElement.removeEventListener('canplay', onCanPlay);
          };
          this.videoElement.addEventListener('canplay', onCanPlay);
        }
        this.videoElement.play().catch(() => {});
      }

      this.mainContent.scrollTop = 0;
      this.refreshIcons();
    }

    renderDescriptionWithTimestamps(desc) {
      const formatted = (desc || '').replace(/(\b\d{1,2}:\d{2}\b)/g, (match) => {
        return `<span class="timestamp-link" style="color: var(--yt-blue); font-weight: 600; cursor: pointer;" data-time="${match}">${match}</span>`;
      });

      this.watchDescription.innerHTML = formatted;
      this.watchDescription.classList.add('collapsed');
      this.descToggleBtn.textContent = "Yana ko'rsatish";

      this.watchDescription.querySelectorAll('.timestamp-link').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const parts = el.getAttribute('data-time').split(':');
          let sec = 0;
          if (parts.length === 2) {
            sec = parseInt(parts[0]) * 60 + parseInt(parts[1]);
          }
          this.videoElement.currentTime = sec;
          this.videoElement.play();
          this.showToast(`O'tildi: ${el.getAttribute('data-time')}`);
        });
      });
    }

    togglePlayPause() {
      if (this.videoElement.paused) {
        this.videoElement.play();
        this.updatePlayPauseIcon(true);
        this.triggerCenterSplash(true);
      } else {
        this.videoElement.pause();
        this.updatePlayPauseIcon(false);
        this.triggerCenterSplash(false);
      }
    }

    updatePlayPauseIcon(isPlaying) {
      if (isPlaying) {
        this.iconPlayPause.setAttribute('data-lucide', 'pause');
        this.playerContainer.classList.remove('paused');
      } else {
        this.iconPlayPause.setAttribute('data-lucide', 'play');
        this.playerContainer.classList.add('paused');
      }
      this.refreshIcons();
    }

    onTimeUpdate() {
      const cur = this.videoElement.currentTime;
      const dur = this.videoElement.duration || 1;
      const pct = (cur / dur) * 100;
      this.scrubFill.style.width = `${pct}%`;
      this.timeDisplay.textContent = `${this.formatTime(cur)} / ${this.formatTime(dur)}`;
      this.updateScrubBuffer();

      // Track playback progress for thumbnails and resume
      if (this.currentVideo && dur > 0) {
        this.videoProgress[this.currentVideo.id] = {
          time: cur,
          duration: dur,
          percent: Math.min(100, Math.round(pct))
        };
        localStorage.setItem('yt_video_progress', JSON.stringify(this.videoProgress));
      }

      // A-B Loop checking
      if (this.loopA !== null && this.loopB !== null && cur >= this.loopB) {
        this.videoElement.currentTime = this.loopA;
      }

      // Live Stats update if open
      if (this.statsNerdsBox.style.display === 'block') {
        this.updateStatsContent();
      }

      if (this.ccActive) {
        const sec = Math.floor(cur);
        const sampleSubtitles = [
          "Assalomu alaykum va xush kelibsiz!",
          "Bugungi videomizda eng muhim texnologiyalarni ko'ramiz.",
          "Sun'iy intellekt va AGI kelajakni o'zgartirmoqda.",
          "Zero-Defect standarti bo'yicha har bir detal tekshirilgan.",
          "Dasturchi: MuzaffarZed maxsus arxitekturasi."
        ];
        this.subtitlesText.textContent = sampleSubtitles[sec % sampleSubtitles.length];
      }
    }

    onLoadedMetadata() {
      this.timeDisplay.textContent = `0:00 / ${this.formatTime(this.videoElement.duration)}`;
    }

    formatTime(seconds) {
      if (isNaN(seconds)) return "0:00";
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    toggleMute() {
      this.videoElement.muted = !this.videoElement.muted;
      this.volumeSlider.value = this.videoElement.muted ? 0 : this.videoElement.volume;
      localStorage.setItem('yt_muted', this.videoElement.muted);
      this.updateVolumeIcon();
    }

    updateVolumeIcon() {
      if (this.videoElement.muted || this.videoElement.volume === 0) {
        this.iconVolume.setAttribute('data-lucide', 'volume-x');
      } else if (this.videoElement.volume < 0.5) {
        this.iconVolume.setAttribute('data-lucide', 'volume-1');
      } else {
        this.iconVolume.setAttribute('data-lucide', 'volume-2');
      }
      this.refreshIcons();
    }

    playNextVideo() {
      if (!this.currentVideo) return;
      const idx = this.videos.findIndex(v => v.id === this.currentVideo.id);
      const nextIdx = (idx + 1) % this.videos.length;
      this.openWatch(this.videos[nextIdx]);
      this.showToast(`Keyingi video: ${this.videos[nextIdx].title}`);
    }

    updateSubscribeButtonState(channelId) {
      const isSubbed = this.subscribedChannels.has(channelId);
      if (isSubbed) {
        this.btnSubscribe.classList.add('subscribed');
        this.subscribeText.textContent = "Obuna bo'lindi";
        this.subscribeBell.style.display = 'block';
      } else {
        this.btnSubscribe.classList.remove('subscribed');
        this.subscribeText.textContent = "Obuna bo'lish";
        this.subscribeBell.style.display = 'none';
      }
      this.refreshIcons();
    }

    toggleSubscribe() {
      if (!this.currentVideo) return;
      const chId = this.currentVideo.channel.id;
      if (this.subscribedChannels.has(chId)) {
        this.subscribedChannels.delete(chId);
        this.showToast("Kanal obunasi bekor qilindi");
      } else {
        this.subscribedChannels.add(chId);
        this.showToast("Kanalga obuna bo'ldingiz!");
      }
      localStorage.setItem('yt_subs', JSON.stringify([...this.subscribedChannels]));
      this.updateSubscribeButtonState(chId);
    }

    updateLikeButtonState(video) {
      const isLiked = this.likedVideos.has(video.id);
      this.likeCount.textContent = this.formatNumber((video.likes || 12000) + (isLiked ? 1 : 0));
      if (isLiked) {
        this.btnLike.classList.add('active');
      } else {
        this.btnLike.classList.remove('active');
      }
      this.btnDislike.classList.remove('active');
    }

    toggleLike() {
      if (!this.currentVideo) return;
      const id = this.currentVideo.id;
      if (this.likedVideos.has(id)) {
        this.likedVideos.delete(id);
        this.showToast("Yoqtirish bekor qilindi");
      } else {
        this.likedVideos.add(id);
        this.showToast("Video yoqqanlar ro'yxatiga saqlandi!");
      }
      localStorage.setItem('yt_liked', JSON.stringify([...this.likedVideos]));
      this.updateLikeButtonState(this.currentVideo);
    }

    toggleDislike() {
      this.btnDislike.classList.toggle('active');
      if (this.btnDislike.classList.contains('active')) {
        this.likedVideos.delete(this.currentVideo.id);
        localStorage.setItem('yt_liked', JSON.stringify([...this.likedVideos]));
        this.updateLikeButtonState(this.currentVideo);
        this.showToast("Fikr bildirildi (Yoqmadi)");
      }
    }

    async renderComments(video) {
      this.commentsList.innerHTML = '<p style="color: var(--yt-text-secondary); font-size: 14px;">Izohlar yuklanmoqda...</p>';

      let comments = video.comments || [];
      try {
        const res = await fetch(`${API_BASE}/api/comments/${video.id}`);
        const data = await res.json();
        if (data.success && data.comments.length > 0) {
          comments = [...data.comments, ...comments];
        }
      } catch (e) {}

      // Apply Sort Mode (Top vs Newest)
      if (this.commentsSortMode === 'top') {
        comments.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      } else {
        comments.sort((a, b) => {
          if (a.time === 'Hozirgina') return -1;
          if (b.time === 'Hozirgina') return 1;
          return 0;
        });
      }

      this.commentsTotalCount.textContent = `${comments.length} ta fikr`;
      this.commentsList.innerHTML = '';

      if (comments.length === 0) {
        this.commentsList.innerHTML = `
          <p style="color: var(--yt-text-secondary); font-size: 14px; margin-top: 10px;">Birinchi bo'lib fikr qoldiring!</p>
        `;
        return;
      }

      comments.forEach(c => {
        const item = document.createElement('div');
        item.className = 'yt-comment-item';
        const formattedComment = this.formatTimestampsInText(c.text);

        item.innerHTML = `
          <img src="${c.avatar}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" alt="${c.author}">
          <div class="yt-comment-body">
            <div class="yt-comment-author">
              <span>@${c.author}</span>
              <span class="yt-comment-time">${c.time}</span>
            </div>
            <div class="yt-comment-content">${formattedComment}</div>
            <div class="yt-comment-footer">
              <button class="yt-comment-btn btn-comment-like">
                <i data-lucide="thumbs-up" style="width: 14px; height: 14px;"></i>
                <span>${c.likes || 0}</span>
              </button>
              <button class="yt-comment-btn">
                <i data-lucide="thumbs-down" style="width: 14px; height: 14px;"></i>
              </button>
              <button class="yt-comment-btn" style="font-weight: 600;">Javob berish</button>
            </div>
          </div>
        `;

        const likeBtn = item.querySelector('.btn-comment-like');
        likeBtn.addEventListener('click', () => {
          c.likes = (c.likes || 0) + 1;
          likeBtn.querySelector('span').textContent = c.likes;
          likeBtn.style.color = 'var(--yt-blue)';
        });

        // Wire timestamp links in comments
        item.querySelectorAll('.yt-timestamp-link').forEach(link => {
          link.addEventListener('click', (e) => {
            e.stopPropagation();
            const sec = parseFloat(link.getAttribute('data-sec'));
            this.videoElement.currentTime = sec;
            if (this.videoElement.paused) this.videoElement.play();
            this.showToast(`Vaqtga sakrash: ${link.textContent}`);
          });
        });

        this.commentsList.appendChild(item);
      });

      this.refreshIcons();
    }

    async addComment() {
      const text = this.newCommentInput.value.trim();
      if (!text || !this.currentVideo) return;

      const newComment = {
        video_id: this.currentVideo.id,
        author: 'MuzaffarZed',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        text: text,
        likes: 1,
        time: 'Hozirgina'
      };

      try {
        await fetch(`${API_BASE}/api/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newComment)
        });
      } catch (e) {}

      if (!this.currentVideo.comments) this.currentVideo.comments = [];
      this.currentVideo.comments.unshift(newComment);

      this.newCommentInput.value = '';
      this.btnSubmitComment.disabled = true;
      this.commentActionsBar.style.display = 'none';

      this.renderComments(this.currentVideo);
      this.showToast("Izohingiz SQLite bazasida saqlandi!");
    }

    renderRelatedVideos(current) {
      this.relatedVideosList.innerHTML = '';
      const related = this.videos.filter(v => v.id !== current.id);

      related.forEach(v => {
        const card = document.createElement('div');
        card.className = 'yt-related-card';
        card.innerHTML = `
          <div class="yt-related-thumb-wrap">
            <img src="${v.thumbnail}" class="yt-related-thumb" alt="${v.title}">
            <span class="yt-duration-badge" style="font-size: 10px; bottom: 4px; right: 4px;">${v.duration}</span>
          </div>
          <div class="yt-related-details">
            <h4 class="yt-related-title">${v.title}</h4>
            <span class="yt-related-channel">${v.channel.name}</span>
            <span class="yt-related-meta">${v.views} • ${v.timestamp}</span>
          </div>
        `;

        card.addEventListener('click', () => {
          this.openWatch(v);
        });

        this.relatedVideosList.appendChild(card);
      });
    }

    async loadRealShorts() {
      try {
        const res = await fetch(`${API_BASE}/api/shorts?limit=8`);
        const json = await res.json();
        if (json.success && json.shorts.length > 0) {
          this.shorts = json.shorts;
        }
      } catch (e) {}
      this.renderShorts();
    }

    renderShorts() {
      this.shortsContainer.innerHTML = '';
      this.shorts.forEach(s => {
        const reel = document.createElement('div');
        reel.className = 'yt-short-reel';
        
        let mediaHtml = '';
        if (s.videoUrl.includes('embed')) {
          mediaHtml = `<iframe class="yt-short-video" src="${s.videoUrl}" style="border:none;" allow="autoplay"></iframe>`;
        } else {
          mediaHtml = `<video class="yt-short-video" loop playsinline src="${s.videoUrl}"></video>`;
        }

        reel.innerHTML = `
          ${mediaHtml}
          <div class="yt-short-progress"><div class="yt-short-progress-fill"></div></div>
          <div class="yt-short-overlay">
            <div class="yt-short-channel">
              <img src="${s.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;" alt="${s.channel}">
              <span style="font-weight: 600; font-size: 14px;">@${s.channel}</span>
              <button class="yt-btn-primary btn-short-sub" style="padding: 4px 12px; font-size: 12px; background: white; color: black; border-radius: 16px; cursor: pointer; transition: all 0.2s ease;">Obuna</button>
            </div>
            <p style="font-size: 14px; margin-bottom: 8px;">${s.title}</p>
            <div class="yt-short-sound-tag" style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #ccc; cursor: pointer;">
              <i data-lucide="music" style="width: 14px; height: 14px; color: var(--yt-blue);"></i>
              <span>${s.sound || 'Original Audio'}</span>
            </div>
          </div>

          <div class="yt-short-actions-sidebar">
            <button class="yt-short-action-btn btn-short-like" title="Yoqdi">
              <i data-lucide="thumbs-up" style="width: 22px; height: 22px;"></i>
              <span class="yt-short-action-label">${s.likes || '100K'}</span>
            </button>
            <button class="yt-short-action-btn btn-short-dislike" title="Yoqmadi">
              <i data-lucide="thumbs-down" style="width: 22px; height: 22px;"></i>
              <span class="yt-short-action-label">Yoqmadi</span>
            </button>
            <button class="yt-short-action-btn btn-short-comment" title="Izohlar">
              <i data-lucide="message-square" style="width: 22px; height: 22px;"></i>
              <span class="yt-short-action-label">${s.comments || '1.2K'}</span>
            </button>
            <button class="yt-short-action-btn btn-short-share" title="Ulashish">
              <i data-lucide="share-2" style="width: 22px; height: 22px;"></i>
              <span class="yt-short-action-label">Ulashish</span>
            </button>
            <button class="yt-short-action-btn btn-short-sound" title="Ovoz">
              <i data-lucide="volume-2" style="width: 22px; height: 22px;"></i>
            </button>
          </div>
        `;

        const video = reel.querySelector('video');
        if (video) {
          video.muted = true;
          const progFill = reel.querySelector('.yt-short-progress-fill');
          video.addEventListener('timeupdate', () => {
            if (video.duration && progFill) {
              progFill.style.width = ((video.currentTime / video.duration) * 100) + '%';
            }
          });
          video.addEventListener('click', () => {
            if (video.paused) video.play();
            else video.pause();
          });
        }

        const soundTag = reel.querySelector('.yt-short-sound-tag');
        if (soundTag) {
          soundTag.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openShortsSoundModal(s.sound, s.channel);
          });
        }

        const soundBtn = reel.querySelector('.btn-short-sound');
        if (soundBtn) {
          soundBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (video) {
              video.muted = !video.muted;
              const icon = soundBtn.querySelector('i');
              if (icon) icon.setAttribute('data-lucide', video.muted ? 'volume-x' : 'volume-2');
              this.refreshIcons();
            } else {
              this.showToast("Audio holati o'zgartirildi");
            }
          });
        }

        const commentBtn = reel.querySelector('.btn-short-comment');
        if (commentBtn) {
          commentBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openShortsComments(s);
          });
        }

        // Channel subscribe in shorts
        const subBtn = reel.querySelector('.btn-short-sub');
        let isShortSub = false;
        if (subBtn) {
          subBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isShortSub = !isShortSub;
            subBtn.textContent = isShortSub ? "Obunadasiz" : "Obuna";
            subBtn.style.background = isShortSub ? "rgba(255,255,255,0.2)" : "white";
            subBtn.style.color = isShortSub ? "white" : "black";
            this.showToast(isShortSub ? `"${s.channel}" kanaliga obuna bo'lindi!` : `"${s.channel}" obunasi bekor qilindi`);
          });
        }

        // Like / Dislike / Share in shorts
        const likeBtn = reel.querySelector('.btn-short-like');
        const dislikeBtn = reel.querySelector('.btn-short-dislike');
        let isLiked = false;
        let isDisliked = false;

        const triggerShortLike = (fromDblClick = false) => {
          isLiked = !isLiked;
          if (isLiked) {
            likeBtn.style.color = 'var(--yt-red)';
            if (isDisliked && dislikeBtn) {
              isDisliked = false;
              dislikeBtn.style.color = 'inherit';
            }
            if (fromDblClick) {
              const heart = document.createElement('div');
              heart.className = 'yt-heart-pop';
              heart.innerHTML = '<svg viewBox="0 0 24 24" width="80" height="80" fill="#ff0000"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
              reel.appendChild(heart);
              setTimeout(() => heart.remove(), 750);
            }
            this.showToast("Shorts yoqtirildi! ❤️");
          } else {
            likeBtn.style.color = 'inherit';
            this.showToast("Like qaytarib olindi");
          }
        };

        if (likeBtn) {
          likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            triggerShortLike(false);
          });
        }

        if (dislikeBtn) {
          dislikeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isDisliked = !isDisliked;
            dislikeBtn.style.color = isDisliked ? 'var(--yt-blue)' : 'inherit';
            if (isDisliked && isLiked && likeBtn) {
              isLiked = false;
              likeBtn.style.color = 'inherit';
            }
            this.showToast(isDisliked ? "Fikr bildirildi (Yoqmadi)" : "Fikr bekor qilindi");
          });
        }

        const shareBtn = reel.querySelector('.btn-short-share');
        if (shareBtn) {
          shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = `${window.location.origin}/?v=${s.id || 'shorts'}`;
            navigator.clipboard.writeText(url).then(() => {
              this.showToast("Shorts havolasi nusxalandi! 📋");
            }).catch(() => {
              this.showToast("Havola nusxalandi!");
            });
          });
        }

        reel.addEventListener('dblclick', (e) => {
          if (e.target.closest('.yt-short-actions-sidebar') || e.target.closest('.yt-short-channel')) return;
          triggerShortLike(true);
        });

        this.shortsContainer.appendChild(reel);
      });

      this.refreshIcons();
    }

    handleUploadSubmit() {
      const title = document.getElementById('upload-title').value.trim();
      const category = document.getElementById('upload-category').value;
      const thumbnail = document.getElementById('upload-thumb').value.trim();

      if (!title) return;

      const newVideo = {
        id: `v-custom-${Date.now()}`,
        title: title,
        category: category,
        videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
        thumbnail: thumbnail || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        duration: "08:15",
        durationSec: 495,
        views: "1 view",
        viewsCount: 1,
        timestamp: "Just now",
        publishedDate: "Hozirgina",
        channel: {
          id: "ch-muzaffarzed",
          name: "MuzaffarZed",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          subscribers: "840K subscribers",
          verified: true
        },
        likes: 1,
        dislikes: 0,
        description: `MuzaffarZed tomonidan yangi yuklangan video!\n\nKategoriya: ${category}`,
        comments: []
      };

      this.videos.unshift(newVideo);

      const customList = JSON.parse(localStorage.getItem('yt_custom_videos') || '[]');
      customList.unshift(newVideo);
      localStorage.setItem('yt_custom_videos', JSON.stringify(customList));

      this.uploadModal.classList.remove('open');
      this.uploadForm.reset();
      this.switchView('home');
      this.renderVideoGrid();
      this.showToast("Video muvaffaqiyatli chop etildi!");
    }

    filterSubscriptions() {
      const subbedChannels = this.subscribedChannels;
      let filtered = this.videos.filter(v => subbedChannels.has(v.channel.id));
      this.renderCustomGrid(filtered, "Obunalar ro'yxati bo'sh", "Kanal sahifalaridan 'Obuna bo'lish' tugmasini bosing.");
    }

    filterLiked() {
      const likedIds = this.likedVideos;
      let filtered = this.videos.filter(v => likedIds.has(v.id));
      this.renderCustomGrid(filtered, "Yoqqan videolar yo'q", "Videolarga 👍 Like bosib bu yerda saqlang.");
    }

    renderCustomGrid(videos, emptyTitle, emptySubtitle) {
      this.videoGrid.innerHTML = '';
      if (videos.length === 0) {
        this.videoGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--yt-text-secondary);">
            <i data-lucide="folder-open" style="width: 56px; height: 56px; margin-bottom: 16px;"></i>
            <h2 style="font-size: 20px; color: var(--yt-text-primary);">${emptyTitle}</h2>
            <p style="margin-top: 8px;">${emptySubtitle}</p>
          </div>
        `;
        this.refreshIcons();
        return;
      }

      videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'yt-card';
        const prog = this.videoProgress && this.videoProgress[video.id];
        const progressHtml = (prog && prog.percent > 2)
          ? `<div class="yt-thumb-progress"><div class="yt-thumb-progress-fill" style="width: ${prog.percent}%;"></div></div>`
          : '';
        card.innerHTML = `
          <div class="yt-thumbnail-wrapper">
            <img src="${video.thumbnail}" class="yt-thumbnail-img" alt="${video.title}">
            <span class="yt-duration-badge">${video.duration}</span>
            ${progressHtml}
            <div class="yt-thumb-quick-actions">
              <button class="yt-thumb-quick-btn btn-quick-watch-later" title="Keyinroq ko'rish">
                <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
              </button>
            </div>
          </div>
          <div class="yt-card-info">
            <img src="${video.channel.avatar}" class="yt-channel-avatar" alt="${video.channel.name}">
            <div class="yt-card-details">
              <h3 class="yt-card-title">${video.title}</h3>
              <div class="yt-card-channel-name">${video.channel.name}</div>
              <div class="yt-card-meta">${video.views} • ${video.timestamp}</div>
            </div>
            <button class="yt-card-more-btn" title="Harakatlar">
              <i data-lucide="more-vertical" style="width: 18px; height: 18px;"></i>
            </button>
          </div>
        `;
        card.querySelector('.yt-thumbnail-wrapper').addEventListener('click', () => this.openWatch(video));
        card.querySelector('.yt-card-title').addEventListener('click', () => this.openWatch(video));
        card.querySelector('.yt-channel-avatar').addEventListener('click', (e) => {
          e.stopPropagation();
          this.openChannelPage(video.channel);
        });
        card.querySelector('.yt-card-channel-name').addEventListener('click', (e) => {
          e.stopPropagation();
          this.openChannelPage(video.channel);
        });
        const quickWl = card.querySelector('.btn-quick-watch-later');
        if (quickWl) {
          quickWl.addEventListener('click', (e) => {
            e.stopPropagation();
            this.addToWatchLater(video);
          });
        }
        const moreBtn = card.querySelector('.yt-card-more-btn');
        if (moreBtn) {
          moreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openCardContextMenu(e, video, card);
          });
        }

        // Hover Live Video Preview
        let hoverTimer = null;
        card.addEventListener('mouseenter', () => {
          if (video.videoUrl && video.videoUrl.endsWith('.mp4')) {
            hoverTimer = setTimeout(() => {
              const thumbWrap = card.querySelector('.yt-thumbnail-wrapper');
              if (thumbWrap && !thumbWrap.querySelector('video.preview-video')) {
                const prev = document.createElement('video');
                prev.className = 'preview-video';
                prev.src = video.videoUrl;
                prev.muted = true;
                prev.playsInline = true;
                prev.autoplay = true;
                prev.loop = true;
                thumbWrap.appendChild(prev);
              }
            }, 450);
          }
        });

        card.addEventListener('mouseleave', () => {
          clearTimeout(hoverTimer);
          const prev = card.querySelector('video.preview-video');
          if (prev) prev.remove();
        });

        this.videoGrid.appendChild(card);
      });

      this.refreshIcons();
    }

    switchView(viewName) {
      const previousView = this.currentView;
      this.currentView = viewName;
      this.viewHome.style.display = viewName === 'home' ? 'block' : 'none';
      this.viewWatch.style.display = viewName === 'watch' ? 'grid' : 'none';
      this.viewShorts.style.display = viewName === 'shorts' ? 'block' : 'none';
      this.viewChannel.style.display = viewName === 'channel' ? 'block' : 'none';
      this.viewHistory.style.display = viewName === 'history' ? 'block' : 'none';
      if (this.viewPlaylist) this.viewPlaylist.style.display = viewName === 'playlist' ? 'block' : 'none';
      if (this.viewSubscriptions) this.viewSubscriptions.style.display = viewName === 'subscriptions' ? 'block' : 'none';

      if (previousView === 'watch' && viewName !== 'watch') {
        if (!this.videoElement.paused && this.videoElement.currentTime > 0) {
          this.dockMiniplayer(true);
        } else {
          this.videoElement.pause();
        }
        cancelAnimationFrame(this.ambientAnimFrame);
      }

      if (viewName === 'watch') {
        this.dockMiniplayer(false);
      }

      if (viewName === 'shorts') {
        const firstShort = this.shortsContainer.querySelector('video');
        if (firstShort) firstShort.play().catch(() => {});
      } else {
        this.shortsContainer.querySelectorAll('video').forEach(v => v.pause());
      }

      this.mainContent.scrollTop = 0;
    }

    showToast(message) {
      this.toastMessage.textContent = message;
      this.toast.classList.add('show');
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast.classList.remove('show');
      }, 2800);
    }

    
    // ------------------------------------------------------------------------
    // PRESS-AND-HOLD FOR 2X SPEED (YOUTUBE 2026 SIGNATURE)
    // ------------------------------------------------------------------------
    init2xSpeedHold() {
      if (!this.playerContainer || !this.videoElement) return;

      this.is2xActive = false;
      this.savedPlaybackRate = 1.0;
      this.holdTimer = null;

      const startHold = (e) => {
        if (e.target.closest('.yt-player-controls') || e.target.closest('.yt-dropdown-menu') || e.target.closest('.yt-modal-card')) {
          return;
        }
        if (this.videoElement.paused) return;

        this.savedPlaybackRate = this.videoElement.playbackRate || 1.0;
        clearTimeout(this.holdTimer);
        this.holdTimer = setTimeout(() => {
          if (!this.videoElement.paused) {
            this.is2xActive = true;
            this.videoElement.playbackRate = 2.0;
            if (this.speed2xPill) this.speed2xPill.classList.add('show');
          }
        }, 320);
      };

      const endHold = () => {
        clearTimeout(this.holdTimer);
        if (this.is2xActive) {
          this.is2xActive = false;
          this.videoElement.playbackRate = this.savedPlaybackRate || 1.0;
          if (this.speed2xPill) this.speed2xPill.classList.remove('show');
        }
      };

      this.playerContainer.addEventListener('mousedown', startHold);
      this.playerContainer.addEventListener('mouseup', endHold);
      this.playerContainer.addEventListener('mouseleave', endHold);

      this.playerContainer.addEventListener('touchstart', startHold, { passive: true });
      this.playerContainer.addEventListener('touchend', endHold);
      this.playerContainer.addEventListener('touchcancel', endHold);
    }

    // ------------------------------------------------------------------------
    // NOTIFICATIONS CENTER
    // ------------------------------------------------------------------------
    initNotificationsEvents() {
      if (this.btnNotifications && this.notificationsDropdown) {
        this.btnNotifications.addEventListener('click', (e) => {
          e.stopPropagation();
          const isShown = this.notificationsDropdown.style.display === 'flex';
          this.notificationsDropdown.style.display = isShown ? 'none' : 'flex';
          if (this.userProfileDropdown) this.userProfileDropdown.style.display = 'none';

          const redDot = this.btnNotifications.querySelector('span');
          if (redDot) redDot.style.display = 'none';
          this.refreshIcons();
        });
      }

      if (this.btnCloseNotif) {
        this.btnCloseNotif.addEventListener('click', () => {
          if (this.notificationsDropdown) this.notificationsDropdown.style.display = 'none';
        });
      }

      if (this.notificationsDropdown) {
        this.notificationsDropdown.querySelectorAll('.yt-notif-item').forEach(item => {
          item.addEventListener('click', () => {
            const vidId = item.getAttribute('data-vid');
            item.classList.remove('unread');
            const found = this.videos.find(v => v.id === vidId);
            if (found) {
              this.openWatch(found);
            }
            this.notificationsDropdown.style.display = 'none';
          });
        });
      }

      document.addEventListener('click', (e) => {
        if (this.notificationsDropdown && !this.notificationsDropdown.contains(e.target) && !this.btnNotifications.contains(e.target)) {
          this.notificationsDropdown.style.display = 'none';
        }
      });
    }

    // ------------------------------------------------------------------------
    // USER PROFILE / ACCOUNT MENU CARD
    // ------------------------------------------------------------------------
    initUserProfileEvents() {
      if (this.userProfileTrigger && this.userProfileDropdown) {
        this.userProfileTrigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const isShown = this.userProfileDropdown.style.display === 'flex';
          this.userProfileDropdown.style.display = isShown ? 'none' : 'flex';
          if (this.notificationsDropdown) this.notificationsDropdown.style.display = 'none';
          this.refreshIcons();
        });
      }

      const menuMyChannel = document.getElementById('menu-my-channel');
      if (menuMyChannel) {
        menuMyChannel.addEventListener('click', () => {
          this.openChannelPage('ch-muzaffarzed');
          this.userProfileDropdown.style.display = 'none';
        });
      }

      const menuStudio = document.getElementById('menu-studio');
      if (menuStudio) {
        menuStudio.addEventListener('click', () => {
          this.uploadModal.classList.add('open');
          this.userProfileDropdown.style.display = 'none';
        });
      }

      const menuPremiumPerks = document.getElementById('menu-premium-perks');
      if (menuPremiumPerks) {
        menuPremiumPerks.addEventListener('click', () => {
          this.showToast("💎 YouTube Pro Premium: 0 Reklama, 4K UHD va 300% Boost cheksiz faol!");
          this.userProfileDropdown.style.display = 'none';
        });
      }

      const menuSwitchTheme = document.getElementById('menu-switch-theme');
      if (menuSwitchTheme) {
        menuSwitchTheme.addEventListener('click', () => {
          this.btnToggleTheme.click();
          this.userProfileDropdown.style.display = 'none';
        });
      }

      const menuSwitchLang = document.getElementById('menu-switch-lang');
      if (menuSwitchLang) {
        menuSwitchLang.addEventListener('click', () => {
          this.btnToggleLang.click();
          this.userProfileDropdown.style.display = 'none';
        });
      }

      const menuShortcuts = document.getElementById('menu-shortcuts');
      if (menuShortcuts) {
        menuShortcuts.addEventListener('click', () => {
          this.shortcutsModal.classList.add('open');
          this.userProfileDropdown.style.display = 'none';
        });
      }

      const menuSignout = document.getElementById('menu-signout');
      if (menuSignout) {
        menuSignout.addEventListener('click', () => {
          this.showToast("MuzaffarZed hisobi tizimda xavfsiz qoldi.");
          this.userProfileDropdown.style.display = 'none';
        });
      }

      document.addEventListener('click', (e) => {
        if (this.userProfileDropdown && !this.userProfileDropdown.contains(e.target) && !this.userProfileTrigger.contains(e.target)) {
          this.userProfileDropdown.style.display = 'none';
        }
      });
    }

    // ------------------------------------------------------------------------
    // GLOBAL KEYBOARD SHORTCUTS (?)
    // ------------------------------------------------------------------------
    initKeyboardShortcutsGlobal() {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (this.cardContextMenu) this.hideCardContextMenu();
          if (this.playerContextMenu) this.playerContextMenu.style.display = 'none';
          if (this.speedDropdown) this.speedDropdown.style.display = 'none';
          if (this.qualityDropdown) this.qualityDropdown.style.display = 'none';
          if (this.sleepTimerDropdown) this.sleepTimerDropdown.style.display = 'none';
          if (this.subtitlesLangMenu) this.subtitlesLangMenu.style.display = 'none';
          if (this.notificationsDropdown) this.notificationsDropdown.style.display = 'none';
          if (this.userProfileDropdown) this.userProfileDropdown.style.display = 'none';
          if (this.recentSearchesContainer) this.recentSearchesContainer.style.display = 'none';
          if (this.shortcutsModal) this.shortcutsModal.classList.remove('open');
          if (this.chaptersModal) this.chaptersModal.classList.remove('open');
          if (this.shortsSoundModal) this.shortsSoundModal.classList.remove('open');
          if (this.playlistModal) this.playlistModal.classList.remove('open');
          if (this.voiceSearchModal) this.voiceSearchModal.classList.remove('open');
          if (this.connectPhoneModal) this.connectPhoneModal.classList.remove('open');
          return;
        }
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === '?' || (e.shiftKey && e.key === '/')) {
          e.preventDefault();
          if (this.shortcutsModal) {
            this.shortcutsModal.classList.toggle('open');
          }
        }
      });
    }

    
    // ------------------------------------------------------------------------
    // DEDICATED SUBSCRIPTIONS FEED HUB
    // ------------------------------------------------------------------------
    openSubscriptionsView() {
      this.switchView('subscriptions');
      this.renderSubscribedChannels();
      this.renderSubscriptionsFeed('all');

      if (this.subsFilterChips) {
        this.subsFilterChips.querySelectorAll('.yt-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            this.subsFilterChips.querySelectorAll('.yt-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.getAttribute('data-subfilter') || 'all';
            this.renderSubscriptionsFeed(filter);
          });
        });
      }

      if (this.btnManageSubsPage) {
        this.btnManageSubsPage.addEventListener('click', () => {
          this.showToast("Barcha obunalar boshqaruv holatida!");
        });
      }
    }

    renderSubscribedChannels() {
      if (!this.subsChannelsRow) return;

      const channels = [
        { id: "ch-muzaffarzed", name: "MuzaffarZed Tech", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80", unread: true },
        { id: "ch-webdev", name: "Web Dev Pro", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80", unread: true },
        { id: "ch-cosmic", name: "Cosmic Cosmos", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80", unread: false },
        { id: "ch-lofi", name: "Lofi Beats", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80", unread: false },
        { id: "ch-nature", name: "Nature 4K", avatar: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150&auto=format&fit=crop&q=80", unread: true }
      ];

      this.subsChannelsRow.innerHTML = channels.map(c => `
        <div class="yt-subs-channel-item" data-id="${c.id}" title="${c.name}">
          <div class="yt-subs-avatar-wrap">
            <img src="${c.avatar}" alt="${c.name}">
            ${c.unread ? '<span class="yt-subs-unread-dot"></span>' : ''}
          </div>
          <span class="yt-subs-channel-name">${c.name}</span>
        </div>
      `).join('');

      this.subsChannelsRow.querySelectorAll('.yt-subs-channel-item').forEach(item => {
        item.addEventListener('click', () => {
          this.subsChannelsRow.querySelectorAll('.yt-subs-channel-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          const chId = item.getAttribute('data-id');
          this.openChannelPage(chId);
        });
      });
    }

    renderSubscriptionsFeed(filter) {
      if (!this.subsVideoGrid) return;
      this.subsVideoGrid.innerHTML = '';

      let list = this.videos;
      if (filter === 'today') {
        list = list.slice(0, 4);
      } else if (filter === 'unwatched') {
        list = list.filter(v => !this.watchHistory.includes(v.id));
      } else if (filter === 'live') {
        list = list.filter(v => v.duration === 'LIVE' || v.category === 'Music');
      }

      if (list.length === 0) {
        this.subsVideoGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--yt-text-secondary);">
            <i data-lucide="bell-off" style="width: 48px; height: 48px; margin-bottom: 12px;"></i>
            <h3 style="color: var(--yt-text-primary);">Yangi videolar topilmadi</h3>
            <p>Boshqa filtrlarni tekshirib ko'ring.</p>
          </div>
        `;
        this.refreshIcons();
        return;
      }

      list.forEach(video => {
        const card = document.createElement('div');
        card.className = 'yt-card';
        card.innerHTML = `
          <div class="yt-thumbnail-wrapper">
            <img src="${video.thumbnail}" class="yt-thumbnail-img" alt="${video.title}">
            <span class="yt-duration-badge">${video.duration}</span>
          </div>
          <div class="yt-card-details">
            <img src="${video.channel.avatar}" class="yt-channel-avatar" alt="${video.channel.name}">
            <div class="yt-card-meta">
              <h3 class="yt-card-title">${video.title}</h3>
              <div class="yt-channel-title">
                <span>${video.channel.name}</span>
                ${video.channel.verified ? '<i data-lucide="check-circle" style="width: 12px; height: 12px; fill: currentColor; color: var(--yt-text-secondary);"></i>' : ''}
              </div>
              <div class="yt-card-views">
                <span>${video.views}</span> • <span>${video.timestamp}</span>
              </div>
            </div>
          </div>
        `;
        card.addEventListener('click', () => this.openWatch(video));
        this.subsVideoGrid.appendChild(card);
      });

      this.refreshIcons();
    }

    // ------------------------------------------------------------------------
    // SLEEP TIMER PRESETS DROPDOWN
    // ------------------------------------------------------------------------
    initSleepTimerDropdown() {
      if (this.btnSleepTimer && this.sleepTimerDropdown) {
        this.btnSleepTimer.addEventListener('click', (e) => {
          e.stopPropagation();
          const isShow = this.sleepTimerDropdown.style.display === 'block';
          this.sleepTimerDropdown.style.display = isShow ? 'none' : 'block';
          if (this.notificationsDropdown) this.notificationsDropdown.style.display = 'none';
          if (this.userProfileDropdown) this.userProfileDropdown.style.display = 'none';
        });

        this.sleepTimerDropdown.querySelectorAll('.yt-dropdown-item').forEach(item => {
          item.addEventListener('click', () => {
            const val = item.getAttribute('data-timer');
            this.sleepTimerDropdown.style.display = 'none';
            if (val === '0') {
              this.setSleepTimer(0);
            } else if (val === 'end') {
              this.showToast("Taymer: Video tugashi bilan o'chadi");
              if (this.sleepTimerBadge) {
                this.sleepTimerBadge.textContent = 'End';
                this.sleepTimerBadge.style.display = 'inline-block';
              }
            } else {
              this.setSleepTimer(parseInt(val));
            }
          });
        });

        document.addEventListener('click', (e) => {
          if (this.sleepTimerDropdown && !this.sleepTimerDropdown.contains(e.target) && !this.btnSleepTimer.contains(e.target)) {
            this.sleepTimerDropdown.style.display = 'none';
          }
        });
      }
    }

    // ------------------------------------------------------------------------
    // RECENT SEARCHES AUTOCOMPLETE
    // ------------------------------------------------------------------------
    initRecentSearches() {
      if (!this.searchInput || !this.suggestionsDropdown) return;

      this.searchInput.addEventListener('focus', () => {
        if (!this.searchInput.value.trim()) {
          this.renderRecentSearches();
        }
      });

      this.searchInput.addEventListener('input', () => {
        if (!this.searchInput.value.trim()) {
          this.renderRecentSearches();
        }
      });
    }

    renderRecentSearches() {
      const recents = JSON.parse(localStorage.getItem('yt_recent_searches') || '["AGI", "MuzaffarZed", "Dasturlash", "Web Development", "AI"]');
      if (recents.length === 0) {
        this.suggestionsDropdown.style.display = 'none';
        return;
      }

      this.suggestionsDropdown.innerHTML = `
        <div style="font-size: 11px; font-weight: 700; color: var(--yt-text-secondary); padding: 8px 12px; border-bottom: 1px solid var(--yt-border);">
          OXIRGI QIDIRUVLAR
        </div>
      `;

      recents.forEach(term => {
        const row = document.createElement('div');
        row.className = 'yt-recent-search-row';
        row.innerHTML = `
          <div class="yt-recent-search-left">
            <i data-lucide="clock" style="width: 15px; height: 15px; color: var(--yt-text-secondary);"></i>
            <span>${term}</span>
          </div>
          <button class="yt-btn-remove-recent" title="Tarixdan o'chirish">O'chirish</button>
        `;

        row.querySelector('.yt-recent-search-left').addEventListener('click', () => {
          this.searchInput.value = term;
          this.searchQuery = term;
          this.suggestionsDropdown.style.display = 'none';
          this.switchView('home');
          this.performSearch(term);
        });

        row.querySelector('.yt-btn-remove-recent').addEventListener('click', (e) => {
          e.stopPropagation();
          const updated = recents.filter(t => t !== term);
          localStorage.setItem('yt_recent_searches', JSON.stringify(updated));
          this.renderRecentSearches();
        });

        this.suggestionsDropdown.appendChild(row);
      });

      this.suggestionsDropdown.style.display = 'block';
      this.refreshIcons();
    }

    
    // ------------------------------------------------------------------------
    // SUBTITLES LANGUAGE SELECTOR & REAL-TIME TRANSLATION
    // ------------------------------------------------------------------------
    initSubtitlesMenuEvents() {
      if (this.btnCcToggle && this.subtitlesLangMenu) {
        this.btnCcToggle.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          this.subtitlesLangMenu.style.display = this.subtitlesLangMenu.style.display === 'block' ? 'none' : 'block';
        });

        this.subtitlesLangMenu.querySelectorAll('.yt-dropdown-item').forEach(item => {
          item.addEventListener('click', () => {
            const lang = item.getAttribute('data-sublang');
            this.subtitlesLangMenu.style.display = 'none';

            if (lang === 'off') {
              this.ccActive = false;
              this.subtitlesOverlay.style.display = 'none';
              this.btnCcToggle.style.color = '#fff';
              this.showToast("Subtitrlar o'chirildi");
            } else {
              this.ccActive = true;
              this.subtitlesOverlay.style.display = 'block';
              this.btnCcToggle.style.color = 'var(--yt-blue)';
              
              const langLabels = { uz: "O'zbekcha", en: "English", ru: "Русский", tr: "Türkçe" };
              const langCaptions = {
                uz: "MuzaffarZed Engine: Zamonaviy sun'iy intellekt arxitekturasi va neyron tarmoqlar tahlili...",
                en: "MuzaffarZed Engine: Modern artificial intelligence architecture and deep neural networks analysis...",
                ru: "MuzaffarZed Engine: Архитектура современного искусственного интеллекта и нейронных сетей...",
                tr: "MuzaffarZed Engine: Modern yapay zeka mimarisi ve sinir aglari analizi..."
              };

              if (this.subtitlesText) {
                this.subtitlesText.textContent = langCaptions[lang] || langCaptions['uz'];
              }
              this.showToast(`Subtitr tili: ${langLabels[lang] || lang}`);
            }
          });
        });
      }
    }

    // ------------------------------------------------------------------------
    // CHANNEL PAGE TABS & SEARCH
    // ------------------------------------------------------------------------
    initChannelPageEvents() {
      if (this.tabChannelShorts) {
        this.tabChannelShorts.addEventListener('click', () => {
          document.querySelectorAll('.yt-channel-tab').forEach(t => t.classList.remove('active'));
          this.tabChannelShorts.classList.add('active');
          if (this.channelAboutSection) this.channelAboutSection.style.display = 'none';
          if (this.channelVideosGrid) {
            this.channelVideosGrid.style.display = 'grid';
            this.channelVideosGrid.innerHTML = '';
            this.shorts.forEach(s => {
              const card = document.createElement('div');
              card.className = 'yt-card';
              card.innerHTML = `
                <div class="yt-thumbnail-wrapper" style="aspect-ratio: 9/16; border-radius: 12px; overflow: hidden;">
                  <img src="${s.avatar}" style="width: 100%; height: 100%; object-fit: cover;">
                  <span class="yt-duration-badge" style="background: var(--yt-red);">SHORTS</span>
                </div>
                <div class="yt-card-details">
                  <h4 style="font-size: 13px; font-weight: 600; margin-top: 6px;">${s.title}</h4>
                </div>
              `;
              card.addEventListener('click', () => {
                this.switchView('shorts');
              });
              this.channelVideosGrid.appendChild(card);
            });
          }
        });
      }

      if (this.tabChannelPlaylists) {
        this.tabChannelPlaylists.addEventListener('click', () => {
          document.querySelectorAll('.yt-channel-tab').forEach(t => t.classList.remove('active'));
          this.tabChannelPlaylists.classList.add('active');
          if (this.channelAboutSection) this.channelAboutSection.style.display = 'none';
          if (this.channelVideosGrid) {
            this.channelVideosGrid.style.display = 'grid';
            this.channelVideosGrid.innerHTML = `
              <div class="yt-card" style="cursor: pointer;" id="channel-playlist-card-demo">
                <div class="yt-thumbnail-wrapper" style="background: linear-gradient(135deg, #1e3a8a, #000); display: flex; align-items: center; justify-content: center; height: 160px; border-radius: 12px;">
                  <i data-lucide="list-music" style="width: 48px; height: 48px; color: white;"></i>
                </div>
                <h4 style="font-size: 14px; font-weight: 700; margin-top: 8px;">Barcha Masterklasslar Playlisti</h4>
                <div style="font-size: 12px; color: var(--yt-text-secondary);">12 ta video • Yangilangan</div>
              </div>
            `;
            this.refreshIcons();
            const card = document.getElementById('channel-playlist-card-demo');
            if (card) card.addEventListener('click', () => this.openPlaylistView('pl-masterclass'));
          }
        });
      }

      const tabAbout = document.getElementById('tab-channel-about');
      if (tabAbout) {
        tabAbout.addEventListener('click', () => {
          document.querySelectorAll('.yt-channel-tab').forEach(t => t.classList.remove('active'));
          tabAbout.classList.add('active');
          if (this.channelVideosGrid) this.channelVideosGrid.style.display = 'none';
          if (this.channelAboutSection) this.channelAboutSection.style.display = 'block';
        });
      }

      const tabVideos = document.getElementById('tab-channel-videos');
      if (tabVideos) {
        tabVideos.addEventListener('click', () => {
          document.querySelectorAll('.yt-channel-tab').forEach(t => t.classList.remove('active'));
          tabVideos.classList.add('active');
          if (this.channelAboutSection) this.channelAboutSection.style.display = 'none';
          if (this.channelVideosGrid) {
            this.channelVideosGrid.style.display = 'grid';
            if (this.currentChannel) {
              const vids = this.videos.filter(v => v.channel && (v.channel.name === this.currentChannel.name || v.channel.id === this.currentChannel.id));
              this.renderChannelVideosList(vids);
            }
          }
        });
      }

      if (this.channelSearchInput) {
        this.channelSearchInput.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          if (this.currentChannel) {
            let vids = this.videos.filter(v => v.channel && (v.channel.name === this.currentChannel.name || v.channel.id === this.currentChannel.id));
            if (q) vids = vids.filter(v => v.title.toLowerCase().includes(q));
            this.renderChannelVideosList(vids);
          }
        });
      }
    }

    // ------------------------------------------------------------------------
    // HISTORY PAGE SEARCH & PAUSE
    // ------------------------------------------------------------------------
    initHistoryPageEvents() {
      if (this.historySearchInput) {
        this.historySearchInput.addEventListener('input', (e) => {
          this.renderHistoryList(e.target.value.trim());
        });
      }

      if (this.btnPauseHistory) {
        this.historyPaused = false;
        this.btnPauseHistory.addEventListener('click', () => {
          this.historyPaused = !this.historyPaused;
          if (this.pauseHistoryLabel) {
            this.pauseHistoryLabel.textContent = this.historyPaused ? "Tarixni yoqish" : "Tarixni pauzalash";
          }
          this.showToast(this.historyPaused ? "Ko'rishlar tarixi pauza qilindi" : "Ko'rishlar tarixi davom ettirilmoqda");
        });
      }
    }

    // ------------------------------------------------------------------------
    // SHORTS SOUND MODAL
    // ------------------------------------------------------------------------
    initShortsSoundModalEvents() {
      if (this.btnCloseSoundModal) {
        this.btnCloseSoundModal.addEventListener('click', () => {
          if (this.shortsSoundModal) this.shortsSoundModal.classList.remove('open');
        });
      }

      if (this.btnUseSound) {
        this.btnUseSound.addEventListener('click', () => {
          if (this.shortsSoundModal) this.shortsSoundModal.classList.remove('open');
          this.uploadModal.classList.add('open');
          this.showToast("Audio tanlandi! Yangi Short rolik yuklashingiz mumkin.");
        });
      }
    }

    openShortsSoundModal(soundName, authorName) {
      if (!this.shortsSoundModal) return;
      if (this.soundModalTitle) this.soundModalTitle.textContent = soundName || "Original Audio";
      if (this.soundModalAuthor) this.soundModalAuthor.textContent = authorName || "MuzaffarZed Studio";
      this.shortsSoundModal.classList.add('open');
      this.refreshIcons();
    }

    formatNumber(num) {
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num.toString();
    }

    // ------------------------------------------------------------------------
    // CENTER PLAY/PAUSE SPLASH HUD
    // ------------------------------------------------------------------------
    triggerCenterSplash(isPlaying) {
      if (!this.playerCenterSplash || !this.centerSplashIcon) return;
      this.centerSplashIcon.setAttribute('data-lucide', isPlaying ? 'play' : 'pause');
      this.refreshIcons();
      this.playerCenterSplash.classList.remove('animate');
      void this.playerCenterSplash.offsetWidth;
      this.playerCenterSplash.classList.add('animate');
      setTimeout(() => {
        if (this.playerCenterSplash) this.playerCenterSplash.classList.remove('animate');
      }, 400);
    }

    // ------------------------------------------------------------------------
    // DUAL SCRUB BAR & TOOLTIP WITH CHAPTERS
    // ------------------------------------------------------------------------
    initScrubBufferAndTooltip() {
      if (this.videoElement) {
        this.videoElement.addEventListener('progress', () => this.updateScrubBuffer());
      }
      if (this.scrubBar) {
        this.scrubBar.addEventListener('mousemove', (e) => this.handleScrubHover(e));
        this.scrubBar.addEventListener('mouseleave', () => {
          if (this.scrubTooltip) this.scrubTooltip.style.display = 'none';
        });
      }
    }

    updateScrubBuffer() {
      if (!this.scrubBuffer || !this.videoElement || !this.videoElement.duration) return;
      const b = this.videoElement.buffered;
      const dur = this.videoElement.duration;
      if (b && b.length > 0) {
        const cur = this.videoElement.currentTime;
        let bufEnd = 0;
        for (let i = 0; i < b.length; i++) {
          if (b.start(i) <= cur && cur <= b.end(i)) {
            bufEnd = b.end(i);
            break;
          }
        }
        if (bufEnd === 0) bufEnd = b.end(b.length - 1);
        const pct = Math.min(100, Math.max(0, (bufEnd / dur) * 100));
        this.scrubBuffer.style.width = `${pct}%`;
      }
    }

    handleScrubHover(e) {
      if (!this.scrubTooltip || !this.scrubBar || !this.videoElement || !this.videoElement.duration) return;
      const rect = this.scrubBar.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const pct = offsetX / rect.width;
      const hoverTime = pct * this.videoElement.duration;

      if (this.tooltipTime) {
        this.tooltipTime.textContent = this.formatTime(hoverTime);
      }

      if (this.tooltipChapter && this.currentVideo) {
        const chapters = this.getVideoChapters(this.currentVideo);
        let matched = chapters[0] ? chapters[0].label : "Mundarija";
        for (let i = 0; i < chapters.length; i++) {
          if (hoverTime >= chapters[i].time) {
            matched = chapters[i].label;
          }
        }
        this.tooltipChapter.textContent = matched;
      }

      this.scrubTooltip.style.left = `${offsetX}px`;
      this.scrubTooltip.style.display = 'flex';
    }

    // ------------------------------------------------------------------------
    // VIDEO CHAPTERS (MUNDARIJA)
    // ------------------------------------------------------------------------
    getVideoChapters(video) {
      if (!video) return [];
      if (video.chapters && Array.isArray(video.chapters) && video.chapters.length > 0) {
        return video.chapters;
      }

      const desc = video.description || '';
      const regex = /(?:(\d{1,2}):)?(\d{2}):(\d{2})\s+([^\n\r]+)/g;
      let match;
      const parsed = [];
      while ((match = regex.exec(desc)) !== null) {
        const h = match[1] ? parseInt(match[1]) : 0;
        const m = parseInt(match[2]);
        const s = parseInt(match[3]);
        const sec = h * 3600 + m * 60 + s;
        parsed.push({ time: sec, label: match[0].trim() });
      }

      if (parsed.length >= 2) return parsed;

      const totalDur = (this.videoElement && this.videoElement.duration) || video.durationSec || 600;
      return [
        { time: 0, label: "00:00 Kirish va Maqsad" },
        { time: Math.floor(totalDur * 0.25), label: `${this.formatTime(totalDur * 0.25)} Arxitektura & Sxema` },
        { time: Math.floor(totalDur * 0.6), label: `${this.formatTime(totalDur * 0.6)} Jonli Amaliyot & MuzaffarZed Engine` },
        { time: Math.floor(totalDur * 0.85), label: `${this.formatTime(totalDur * 0.85)} Sinov, Xulosalar & Yakun` }
      ];
    }

    initChaptersEvents() {
      if (this.btnChapters) {
        this.btnChapters.addEventListener('click', () => this.openChaptersModal());
      }
      if (this.btnCloseChaptersModal) {
        this.btnCloseChaptersModal.addEventListener('click', () => {
          if (this.chaptersModal) this.chaptersModal.classList.remove('open');
        });
      }
      if (this.chaptersModal) {
        this.chaptersModal.addEventListener('click', (e) => {
          if (e.target === this.chaptersModal) this.chaptersModal.classList.remove('open');
        });
      }
    }

    openChaptersModal() {
      if (!this.chaptersModal || !this.chaptersListContainer || !this.currentVideo) return;
      const chapters = this.getVideoChapters(this.currentVideo);
      this.chaptersListContainer.innerHTML = '';

      chapters.forEach((ch) => {
        const row = document.createElement('div');
        row.className = 'yt-chapter-row';
        row.innerHTML = `
          <span class="yt-chapter-time-badge">${this.formatTime(ch.time)}</span>
          <span class="yt-chapter-title">${ch.label}</span>
          <i data-lucide="play-circle" style="width: 18px; height: 18px; color: var(--yt-blue); opacity: 0.8;"></i>
        `;
        row.addEventListener('click', () => {
          this.videoElement.currentTime = ch.time;
          if (this.videoElement.paused) this.videoElement.play();
          this.chaptersModal.classList.remove('open');
          this.showToast(`Mundarija: ${ch.label}`);
        });
        this.chaptersListContainer.appendChild(row);
      });

      this.refreshIcons();
      this.chaptersModal.classList.add('open');
    }

    // ------------------------------------------------------------------------
    // COMMENTS SORTING & TIMESTAMPS
    // ------------------------------------------------------------------------
    initCommentsSortingEvents() {
      if (this.btnSortComments) {
        this.btnSortComments.addEventListener('click', () => {
          this.commentsSortMode = this.commentsSortMode === 'top' ? 'newest' : 'top';
          if (this.sortCommentsLabel) {
            this.sortCommentsLabel.textContent = this.commentsSortMode === 'top' ? 'Eng saralar' : 'Yangilari avval';
          }
          if (this.currentVideo) {
            this.renderComments(this.currentVideo);
          }
          this.showToast(`Izohlar: ${this.commentsSortMode === 'top' ? 'Eng saralar' : 'Eng yangilari'} bo'yicha`);
        });
      }
    }

    formatTimestampsInText(text) {
      if (!text) return '';
      const regex = /(?:(\d{1,2}):)?(\d{2}):(\d{2})/g;
      return text.replace(regex, (match, h, m, s) => {
        const hours = h ? parseInt(h) : 0;
        const totalSec = hours * 3600 + parseInt(m) * 60 + parseInt(s);
        return `<span class="yt-timestamp-link" data-sec="${totalSec}">${match}</span>`;
      });
    }

    // ------------------------------------------------------------------------
    // SHORTS COMMENTS DRAWER
    // ------------------------------------------------------------------------
    initShortsCommentsEvents() {
      if (this.btnCloseShortsComments) {
        this.btnCloseShortsComments.addEventListener('click', () => {
          if (this.shortsCommentsDrawer) this.shortsCommentsDrawer.style.display = 'none';
        });
      }

      if (this.btnSubmitShortsComment) {
        this.btnSubmitShortsComment.addEventListener('click', () => this.submitShortsComment());
      }

      if (this.shortsCommentInput) {
        this.shortsCommentInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') this.submitShortsComment();
        });
      }
    }

    openShortsComments(shortData) {
      if (!this.shortsCommentsDrawer || !shortData) return;
      this.activeShortId = shortData.id;
      if (!this.shortsComments) this.shortsComments = {};
      if (!this.shortsComments[shortData.id]) {
        this.shortsComments[shortData.id] = [
          { author: "MuzaffarZed", text: "Ushbu short reel MuzaffarZed Ultra Engine asosida yaratildi!", time: "Hozirgina" },
          { author: "Sanjar Dev", text: "Zo'r effektlar va silliq montaj, davomini kutyapmiz!", time: "10 daqiqa oldin" },
          { author: "CyberPro", text: "Almashishi judayam tez va qotmasdan ishlayapti, ajoyib!", time: "1 soat oldin" }
        ];
      }

      this.renderShortsCommentsList();
      this.shortsCommentsDrawer.style.display = 'flex';
      if (this.shortsCommentInput) this.shortsCommentInput.focus();
    }

    renderShortsCommentsList() {
      if (!this.shortsCommentsList) return;
      const list = this.shortsComments[this.activeShortId] || [];
      if (this.shortsCommentsCount) {
        this.shortsCommentsCount.textContent = `(${list.length})`;
      }
      this.shortsCommentsList.innerHTML = list.map(c => `
        <div style="background: var(--yt-surface); border-radius: 8px; padding: 8px 12px; border: 1px solid var(--yt-border);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <b style="font-size: 13px; color: var(--yt-blue);">${c.author}</b>
            <span style="font-size: 11px; color: var(--yt-text-secondary);">${c.time}</span>
          </div>
          <div style="font-size: 13px; color: var(--yt-text-primary);">${c.text}</div>
        </div>
      `).join('');
    }

    submitShortsComment() {
      if (!this.shortsCommentInput || !this.activeShortId) return;
      const val = this.shortsCommentInput.value.trim();
      if (!val) return;
      if (!this.shortsComments[this.activeShortId]) this.shortsComments[this.activeShortId] = [];
      this.shortsComments[this.activeShortId].unshift({
        author: "Muzaffar (Siz)",
        text: val,
        time: "Hozirgina"
      });
      this.shortsCommentInput.value = '';
      this.renderShortsCommentsList();
      this.showToast("Shorts izohingiz qo'shildi!");
    }

    // ------------------------------------------------------------------------
    // CUSTOM PLAYER CONTEXT MENU (RIGHT-CLICK)
    // ------------------------------------------------------------------------
    initVideoContextMenu() {
      if (!this.playerContainer || !this.playerContextMenu) return;

      this.playerContainer.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const menuWidth = 260;
        const menuHeight = 280;
        let x = e.clientX;
        let y = e.clientY;

        if (x + menuWidth > window.innerWidth) x = window.innerWidth - menuWidth - 10;
        if (y + menuHeight > window.innerHeight) y = window.innerHeight - menuHeight - 10;

        this.playerContextMenu.style.left = `${x}px`;
        this.playerContextMenu.style.top = `${y}px`;
        this.playerContextMenu.style.display = 'block';

        if (this.ctxLoopText) {
          this.ctxLoopText.textContent = this.videoElement.loop ? "Videoni takrorlash: Yoqilgan ✓" : "Videoni takrorlash (Loop)";
        }
        this.refreshIcons();
      });

      document.addEventListener('click', (e) => {
        if (this.playerContextMenu && !this.playerContextMenu.contains(e.target)) {
          this.playerContextMenu.style.display = 'none';
        }
      });

      if (this.ctxLoop) {
        this.ctxLoop.addEventListener('click', () => {
          this.btnLoopToggle.click();
          this.playerContextMenu.style.display = 'none';
        });
      }

      if (this.ctxCopyUrl) {
        this.ctxCopyUrl.addEventListener('click', () => {
          const url = window.location.href;
          navigator.clipboard.writeText(url);
          this.showToast("Video havolasi nusxalandi!");
          this.playerContextMenu.style.display = 'none';
        });
      }

      if (this.ctxCopyTime) {
        this.ctxCopyTime.addEventListener('click', () => {
          const t = Math.floor(this.videoElement.currentTime);
          const base = window.location.href.split('?')[0].split('#')[0];
          const timeUrl = `${base}?v=${this.currentVideo ? this.currentVideo.id : ''}&t=${t}`;
          navigator.clipboard.writeText(timeUrl);
          this.showToast(`Hozirgi vaqt (${this.formatTime(t)}) havolasi nusxalandi!`);
          this.playerContextMenu.style.display = 'none';
        });
      }

      if (this.ctxCopyEmbed) {
        this.ctxCopyEmbed.addEventListener('click', () => {
          const embed = `<iframe width="560" height="315" src="${this.videoElement.src}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`;
          navigator.clipboard.writeText(embed);
          this.showToast("Embed iframe kodi nusxalandi!");
          this.playerContextMenu.style.display = 'none';
        });
      }

      if (this.ctxStats) {
        this.ctxStats.addEventListener('click', () => {
          this.btnStatsNerds.click();
          this.playerContextMenu.style.display = 'none';
        });
      }

      if (this.ctxEq) {
        this.ctxEq.addEventListener('click', () => {
          this.btnAudioEq.click();
          this.playerContextMenu.style.display = 'none';
        });
      }

      if (this.ctxPip) {
        this.ctxPip.addEventListener('click', () => {
          this.btnPipNative.click();
          this.playerContextMenu.style.display = 'none';
        });
      }

      const ctxZoom = document.getElementById('ctx-zoom-fit');
      if (ctxZoom) {
        ctxZoom.addEventListener('click', () => {
          this.toggleZoomFill();
          this.playerContextMenu.style.display = 'none';
        });
      }
    }

    // ------------------------------------------------------------------------
    toggleZoomFill() {
      if (!this.videoElement) return;
      const isZoomed = this.videoElement.classList.toggle('zoom-fill');
      const zoomText = document.getElementById('ctx-zoom-text');
      if (zoomText) zoomText.textContent = isZoomed ? "Asl o'lcham (Fit screen)" : "Kattalashtirish (Zoom to fill)";
      this.showToast(isZoomed ? "Zoom: To'liq qoplash (Cover)" : "Zoom: Asl o'lcham (Contain)");
    }

        // MOUSE WHEEL VOLUME CONTROL
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // VIDEO CARD CONTEXT MENU & QUICK ACTIONS
    // ------------------------------------------------------------------------
    initCardContextMenu() {
      this.cardContextMenu = document.getElementById('card-context-menu');
      this.currentContextVideo = null;
      this.currentContextCard = null;

      if (!this.cardContextMenu) return;

      const btnWl = document.getElementById('card-ctx-watch-later');
      const btnPl = document.getElementById('card-ctx-playlist');
      const btnCopy = document.getElementById('card-ctx-copy-link');
      const btnHide = document.getElementById('card-ctx-hide');

      if (btnWl) {
        btnWl.addEventListener('click', () => {
          if (this.currentContextVideo) {
            this.addToWatchLater(this.currentContextVideo);
          }
          this.hideCardContextMenu();
        });
      }

      if (btnPl) {
        btnPl.addEventListener('click', () => {
          if (this.currentContextVideo) {
            this.currentVideo = this.currentContextVideo;
            this.openPlaylistModal();
          }
          this.hideCardContextMenu();
        });
      }

      if (btnCopy) {
        btnCopy.addEventListener('click', () => {
          if (this.currentContextVideo) {
            const url = `${window.location.origin}/?v=${this.currentContextVideo.id}`;
            navigator.clipboard.writeText(url).then(() => {
              this.showToast("Video havolasi nusxalandi!");
            });
          }
          this.hideCardContextMenu();
        });
      }

      if (btnHide) {
        btnHide.addEventListener('click', () => {
          if (this.currentContextCard) {
            this.currentContextCard.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            this.currentContextCard.style.opacity = '0';
            this.currentContextCard.style.transform = 'scale(0.85)';
            setTimeout(() => this.currentContextCard.remove(), 300);
            this.showToast("Video tavsiyalardan olib tashlandi");
          }
          this.hideCardContextMenu();
        });
      }

      document.addEventListener('click', (e) => {
        if (this.cardContextMenu && this.cardContextMenu.style.display !== 'none') {
          if (!this.cardContextMenu.contains(e.target)) {
            this.hideCardContextMenu();
          }
        }
      });
    }

    openCardContextMenu(e, video, card) {
      if (!this.cardContextMenu) return;
      this.currentContextVideo = video;
      this.currentContextCard = card;

      const rect = e.currentTarget.getBoundingClientRect();
      let left = rect.left - 180;
      let top = rect.bottom + 6;

      if (left < 10) left = 10;
      if (top + 180 > window.innerHeight) top = rect.top - 180;

      this.cardContextMenu.style.left = `${left}px`;
      this.cardContextMenu.style.top = `${top}px`;
      this.cardContextMenu.style.display = 'block';
      this.refreshIcons();
    }

    hideCardContextMenu() {
      if (this.cardContextMenu) {
        this.cardContextMenu.style.display = 'none';
      }
    }

    async addToWatchLater(video) {
      if (!video) return;
      try {
        await fetch(`${API_BASE}/api/playlists/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            playlist_id: 'pl-watch-later',
            video_id: video.id,
            title: video.title,
            thumbnail: video.thumbnail
          })
        });
        this.showToast(`"${video.title.substring(0, 30)}..." Keyinroq ko'rishga qo'shildi!`);
      } catch (e) {
        this.showToast("Keyinroq ko'rishga saqlandi (Kesh)");
      }
    }

    // ------------------------------------------------------------------------
    // NETWORK CONNECTIVITY GUARDIAN (OFFLINE / ONLINE DETECTOR)
    // ------------------------------------------------------------------------
    initNetworkStatusWatcher() {
      this.networkStatusPill = document.getElementById('network-status-pill');
      this.netStatusText = document.getElementById('net-status-text');

      window.addEventListener('offline', () => {
        this.showNetworkPill(false, "Internet aloqasi uzildi — Oflayn rejimdasiz");
      });

      window.addEventListener('online', () => {
        this.showNetworkPill(true, "Internet aloqasi qayta tiklandi");
        setTimeout(() => {
          if (this.networkStatusPill) this.networkStatusPill.classList.remove('show');
        }, 3000);
      });
    }

    showNetworkPill(isOnline, message) {
      if (!this.networkStatusPill) return;
      this.networkStatusPill.className = `yt-network-status-pill ${isOnline ? 'online' : 'offline'} show`;
      if (this.netStatusText) this.netStatusText.textContent = message;
    }

    initPhoneConnect() {
      const fetchNetworkInfo = async () => {
        try {
          const res = await fetch(`${API_BASE}/api/network-info`);
          if (res.ok) {
            this.networkInfoData = await res.json();
            if (this.phoneModalIpLink && this.networkInfoData.local_url) {
              this.phoneModalIpLink.textContent = this.networkInfoData.local_url;
              this.phoneModalIpLink.href = this.networkInfoData.local_url;
            }
            if (this.phoneModalMdnsLink && this.networkInfoData.mdns_url) {
              this.phoneModalMdnsLink.textContent = this.networkInfoData.mdns_url;
              this.phoneModalMdnsLink.href = this.networkInfoData.mdns_url;
            }
            if (this.networkInfoData.public_tunnel_url && this.phoneModalCfLink) {
              this.phoneModalCfLink.textContent = this.networkInfoData.public_tunnel_url;
              this.phoneModalCfLink.href = this.networkInfoData.public_tunnel_url;
            }
            const activeQrUrl = this.networkInfoData.public_tunnel_url || this.networkInfoData.local_url;
            if (this.phoneModalQrImg && activeQrUrl) {
              this.phoneModalQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(activeQrUrl)}`;
            }
          }
        } catch (err) {
          console.warn("[Network Info] Fetch failed:", err);
        }
      };

      fetchNetworkInfo();

      const openModal = async () => {
        if (!this.networkInfoData) await fetchNetworkInfo();
        if (this.userProfileDropdown) this.userProfileDropdown.style.display = 'none';
        if (this.connectPhoneModal) {
          this.connectPhoneModal.classList.add('open');
          this.refreshIcons();
        }
      };

      const closeModal = () => {
        if (this.connectPhoneModal) this.connectPhoneModal.classList.remove('open');
      };

      if (this.btnConnectPhone) {
        this.btnConnectPhone.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal();
        });
      }

      if (this.menuConnectPhone) {
        this.menuConnectPhone.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal();
        });
      }

      if (this.btnClosePhoneModal) {
        this.btnClosePhoneModal.addEventListener('click', closeModal);
      }

      if (this.connectPhoneModal) {
        this.connectPhoneModal.addEventListener('click', (e) => {
          if (e.target === this.connectPhoneModal) closeModal();
        });
      }

      if (this.btnCopyIpLink) {
        this.btnCopyIpLink.addEventListener('click', () => {
          const url = (this.phoneModalIpLink && this.phoneModalIpLink.href) ? this.phoneModalIpLink.href : '';
          if (url) {
            navigator.clipboard.writeText(url).then(() => {
              this.showToast("Wi-Fi IP manzili buferga nusxalandi! 📋");
            }).catch(() => {
              this.showToast(url);
            });
          }
        });
      }

      if (this.btnCopyMdnsLink) {
        this.btnCopyMdnsLink.addEventListener('click', () => {
          const url = (this.phoneModalMdnsLink && this.phoneModalMdnsLink.href) ? this.phoneModalMdnsLink.href : '';
          if (url) {
            navigator.clipboard.writeText(url).then(() => {
              this.showToast("mDNS manzili buferga nusxalandi! 📋");
            }).catch(() => {
              this.showToast(url);
            });
          }
        });
      }

      if (this.btnCopyCfLink) {
        this.btnCopyCfLink.addEventListener('click', () => {
          const url = (this.phoneModalCfLink && this.phoneModalCfLink.href && this.phoneModalCfLink.href !== '#') 
            ? this.phoneModalCfLink.href 
            : (this.networkInfoData ? this.networkInfoData.public_tunnel_url : '');
          if (url) {
            navigator.clipboard.writeText(url).then(() => {
              this.showToast("Dunyo bo'ylab global HTTPS havola nusxalandi! 🌐");
            }).catch(() => {
              this.showToast(url);
            });
          }
        });
      }
    }

    initPlayerWheelVolume() {
      if (!this.playerContainer || !this.videoElement) return;

      this.playerContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const step = 0.05;
        let newVol = this.videoElement.volume + (e.deltaY < 0 ? step : -step);
        newVol = Math.max(0, Math.min(1, newVol));
        this.videoElement.volume = newVol;
        if (this.volumeSlider) this.volumeSlider.value = newVol;
        this.updateVolumeIcon();
        this.showVolumeHud(newVol);
      }, { passive: false });
    }

  }

  window.addEventListener('DOMContentLoaded', () => {
    window.app = new YouTubeApp();
  });
})();
