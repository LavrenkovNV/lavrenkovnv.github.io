        function detectmob() {
            if (typeof window.orientation !== 'undefined') {
                return true;
            }
            return false;
        }