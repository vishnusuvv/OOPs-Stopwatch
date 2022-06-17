    function stopwatch() {
        let started = false;
        let stopped = false;
        let timer = 0;
        let duration = 0;
        let startTime, stopTime;
        let interval;
        this.start = function () {
            if (started) {

                feedbackUi('Stopwatch already began...', [' btn card text-white bg-warning w-25 m-auto   ']);
                throw new Error('Stopwatch already began...');

            }
            else {
                progressBar.classList.add('bg-danger');
                started = true;
                feedbackUi('Stopwatch started...', [' btn card text-white bg-success w-25 m-auto   ']);

                interval = setInterval(function () {
                    timer++;

                    timerUi.innerHTML = `<h4>${Math.round((timer / 250) * 100) / 100}</h4>`;


                }, 0)
            }

        };
        this.stop = function () {
            if (!started) {
                feedback.innerHTML = `<h4>Stopwatch hasnt started yet...</h4>`;
                feedbackUi('Stopwatch hasnt started yet...', [' btn card text-white bg-warning w-25 m-auto  ']);
                throw new Error('Stopwatch hasnt started yet...')
            }
            else {
                progressBar.classList.remove('bg-danger');
                progressBar.classList.add('bg-warning');
                console.log('Stopwatch stopped!')

                feedbackUi('Stopwatch stopped!', [' btn card text-white bg-danger w-25 m-auto   ']);
                started = false;
                stopped = true;
                clearInterval(interval);
            }
        };
        this.reset = function () {

            if (stopped || started) {
                console.log("Stopwatch Reset!");
                progressBar.classList.remove('bg-danger');
                progressBar.classList.remove('bg-warning');
                progressBar.classList.add('bg-info');

                feedbackUi('Stopwatch Reset!', [' btn card text-white bg-success w-25 m-auto   ']);
                clearInterval(interval);
                timer = 0;
                timerUi.innerHTML = `<h4>0.00</h4>`;
                stopped = false;
                started = false;
            }
            else {
                clearInterval(interval);
                timer = 0;
                timerUi.innerHTML = `<h4>0.00</h4>`;
                started = false;
                feedbackUi('Stopwatch is not running!', ['btn card text-white bg-warning w-25 m-auto   ']);
            }
        };
        this.toggle = function () {
            if (!started) {
                console.log(1);
                progressBar.classList.add('bg-danger');
                started = true;
                feedbackUi('Stopwatch started...', [' btn card text-white bg-success w-25 m-auto   ']);

                interval = setInterval(function () {
                    timer++;

                    timerUi.innerHTML = `<h4>${Math.round((timer / 250) * 100) / 100}</h4>`;


                }, 0)

            }
            else {
                progressBar.classList.remove('bg-danger');
                progressBar.classList.add('bg-warning');
                console.log('Stopwatch stopped!')

                feedbackUi('Stopwatch stopped!', [' btn card text-white bg-danger w-25 m-auto    ']);
                started = false;
                stopped = true;
                clearInterval(interval);
            }
        }

        this.duration = function () {
            return timer / 100;
        }
        Object.defineProperty(this, duration, {
            get: function () {
                return timer
            }
        });

    }

    const sw = new stopwatch;

    const timerUi = document.querySelector('.sw__timer');
    const feedback = document.querySelector('.sw__feedback');
    const startBtn = document.querySelector('.sw__start');
    const stopBtn = document.querySelector('.sw__stop');
    const resetBtn = document.querySelector('.sw__reset');
    const toggleUi = document.querySelector('.progress-bar');
    const toggleUi2 = document.querySelector('.sw__timer');
    const progressBar = document.querySelector('.sw__circle .progress-bar');


    startBtn.addEventListener('click', sw.start);

    stopBtn.addEventListener('click', sw.stop);

    resetBtn.addEventListener('click', sw.reset);

    toggleUi.addEventListener('click', sw.toggle);

    toggleUi.addEventListener('dblclick', sw.reset);

    toggleUi2.addEventListener('click', sw.toggle);

    toggleUi2.addEventListener('dblclick', sw.reset);


    function feedbackUi(msg, classname) {

        feedback.classList = classname;
        feedback.innerHTML = msg;
        setTimeout(() => {

            feedback.innerHTML = ' <div  class="btn ">Code by Vishnu Suvarnan</div>';
            feedback.classList = 'sw__feedback';
        }, 750)

    }