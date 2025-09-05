// Global variables
let currentUser = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    loadRoadmapContent();
    setupFormHandlers();
    setupSmoothScrolling();
});

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchModal(currentModalId, targetModalId) {
    closeModal(currentModalId);
    openModal(targetModalId);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Show specific roadmap
function showRoadmap(language) {
    // Hide all roadmap sections
    const roadmapSections = document.querySelectorAll('.roadmap-section');
    roadmapSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected roadmap
    const targetSection = document.getElementById(`${language}-roadmap`);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show mistakes section
function showMistakesSection() {
    // Hide all roadmap sections
    const roadmapSections = document.querySelectorAll('.roadmap-section');
    roadmapSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show mistakes section
    const mistakesSection = document.getElementById('mistakes-section');
    if (mistakesSection) {
        mistakesSection.classList.add('active');
        mistakesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Load roadmap content dynamically
function loadRoadmapContent() {
    loadCRoadmap();
    loadPythonRoadmap();
    loadJavaRoadmap();
    loadDSARoadmap();
    loadMistakesSection();
}

function loadCRoadmap() {
    const cRoadmap = document.getElementById('c-roadmap');
    cRoadmap.innerHTML = `
        <div class="container">
            <div class="roadmap-header">
                <h2><i class="fab fa-cuttlefish"></i> C Programming Roadmap</h2>
                <p>Master the fundamentals of programming with C language</p>
            </div>
            
            <!-- Online Compiler Section -->
            <div class="compiler-section">
                <h3><i class="fas fa-code"></i> Try C Programming Online</h3>
                <div class="compiler-container">
                    <iframe 
                        src="https://www.programiz.com/c-programming/online-compiler/" 
                        width="100%" 
                        height="600" 
                        frameborder="0"
                        title="C Online Compiler">
                    </iframe>
                </div>
                <div class="compiler-alternatives">
                    <p>Alternative Compilers:</p>
                    <a href="https://replit.com/languages/c" target="_blank" class="compiler-link">Replit C</a>
                    <a href="https://www.onlinegdb.com/online_c_compiler" target="_blank" class="compiler-link">OnlineGDB</a>
                    <a href="https://ideone.com/" target="_blank" class="compiler-link">Ideone</a>
                </div>
            </div>
            
            <div class="roadmap-timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 1-2: Basics & Setup</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Install C compiler (GCC/MinGW)</li>
                            <li>Understand compilation process</li>
                            <li>Hello World program</li>
                            <li>Basic syntax and structure</li>
                            <li>Variables and data types</li>
                            <li>Input/Output operations</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 3-4: Control Structures</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Conditional statements (if, else, switch)</li>
                            <li>Loops (for, while, do-while)</li>
                            <li>Break and continue statements</li>
                            <li>Nested loops and conditions</li>
                            <li>Practice problems and exercises</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 5-6: Functions & Arrays</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Function declaration and definition</li>
                            <li>Function parameters and return values</li>
                            <li>Scope and storage classes</li>
                            <li>Arrays (1D and 2D)</li>
                            <li>String handling</li>
                            <li>Library functions</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 7-8: Pointers & Memory</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Introduction to pointers</li>
                            <li>Pointer arithmetic</li>
                            <li>Pointers and arrays</li>
                            <li>Dynamic memory allocation</li>
                            <li>malloc, calloc, realloc, free</li>
                            <li>Memory management best practices</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 9-10: Advanced Topics</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Structures and unions</li>
                            <li>File handling operations</li>
                            <li>Preprocessor directives</li>
                            <li>Function pointers</li>
                            <li>Recursion and algorithms</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 11-12: Projects & Practice</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Build a calculator application</li>
                            <li>Create a student management system</li>
                            <li>Implement data structures (linked list, stack, queue)</li>
                            <li>Code optimization techniques</li>
                            <li>Debugging and testing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadPythonRoadmap() {
    const pythonRoadmap = document.getElementById('python-roadmap');
    pythonRoadmap.innerHTML = `
        <div class="container">
            <div class="roadmap-header">
                <h2><i class="fab fa-python"></i> Python Programming Roadmap</h2>
                <p>Learn the most versatile and beginner-friendly programming language</p>
            </div>
            
            <!-- Online Compiler Section -->
            <div class="compiler-section">
                <h3><i class="fas fa-code"></i> Try Python Programming Online</h3>
                <div class="compiler-container">
                    <iframe 
                        src="https://www.programiz.com/python-programming/online-compiler/" 
                        width="100%" 
                        height="600" 
                        frameborder="0"
                        title="Python Online Compiler">
                    </iframe>
                </div>
                <div class="compiler-alternatives">
                    <p>Alternative Compilers:</p>
                    <a href="https://replit.com/languages/python3" target="_blank" class="compiler-link">Replit Python</a>
                    <a href="https://www.onlinegdb.com/online_python_compiler" target="_blank" class="compiler-link">OnlineGDB</a>
                    <a href="https://trinket.io/python" target="_blank" class="compiler-link">Trinket</a>
                </div>
            </div>
            
            <div class="roadmap-timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 1-2: Python Fundamentals</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Install Python and IDE setup</li>
                            <li>Python syntax and indentation</li>
                            <li>Variables and data types</li>
                            <li>Basic operators</li>
                            <li>Input/Output operations</li>
                            <li>Comments and documentation</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 3-4: Control Flow & Functions</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Conditional statements</li>
                            <li>Loops (for, while)</li>
                            <li>Function definition and calling</li>
                            <li>Parameters and arguments</li>
                            <li>Lambda functions</li>
                            <li>Scope and global variables</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 5-6: Data Structures</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Lists and list methods</li>
                            <li>Tuples and sets</li>
                            <li>Dictionaries and their operations</li>
                            <li>String manipulation</li>
                            <li>List comprehensions</li>
                            <li>Iterators and generators</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 7-8: Object-Oriented Programming</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Classes and objects</li>
                            <li>Attributes and methods</li>
                            <li>Inheritance and polymorphism</li>
                            <li>Encapsulation and abstraction</li>
                            <li>Special methods (__init__, __str__)</li>
                            <li>Class and static methods</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 9-10: Modules & Libraries</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Importing modules</li>
                            <li>Creating custom modules</li>
                            <li>Package management with pip</li>
                            <li>Popular libraries (NumPy, Pandas)</li>
                            <li>File handling and I/O</li>
                            <li>Exception handling</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 11-12: Web Development Basics</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Introduction to Flask/Django</li>
                            <li>HTTP requests and responses</li>
                            <li>Templates and static files</li>
                            <li>Database integration</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 13-16: Advanced Topics & Projects</h3>
                        <div class="duration">Duration: 4 weeks</div>
                        <ul>
                            <li>Data analysis with Pandas</li>
                            <li>Web scraping with BeautifulSoup</li>
                            <li>GUI development with Tkinter</li>
                            <li>Testing with unittest/pytest</li>
                            <li>Build a web application project</li>
                            <li>Deploy applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadJavaRoadmap() {
    const javaRoadmap = document.getElementById('java-roadmap');
    javaRoadmap.innerHTML = `
        <div class="container">
            <div class="roadmap-header">
                <h2><i class="fab fa-java"></i> Java Programming Roadmap</h2>
                <p>Build robust enterprise applications with Java</p>
            </div>
            
            <!-- Online Compiler Section -->
            <div class="compiler-section">
                <h3><i class="fas fa-code"></i> Try Java Programming Online</h3>
                <div class="compiler-container">
                    <iframe 
                        src="https://www.programiz.com/java-programming/online-compiler/" 
                        width="100%" 
                        height="600" 
                        frameborder="0"
                        title="Java Online Compiler">
                    </iframe>
                </div>
                <div class="compiler-alternatives">
                    <p>Alternative Compilers:</p>
                    <a href="https://replit.com/languages/java10" target="_blank" class="compiler-link">Replit Java</a>
                    <a href="https://www.onlinegdb.com/online_java_compiler" target="_blank" class="compiler-link">OnlineGDB</a>
                    <a href="https://www.jdoodle.com/online-java-compiler/" target="_blank" class="compiler-link">JDoodle</a>
                </div>
            </div>
            
            <div class="roadmap-timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 1-2: Java Fundamentals</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Install JDK and IDE setup</li>
                            <li>Java syntax and structure</li>
                            <li>Variables and data types</li>
                            <li>Operators and expressions</li>
                            <li>Input/Output operations</li>
                            <li>Compilation and execution process</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 3-4: Control Structures & Methods</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Conditional statements</li>
                            <li>Loops and iterations</li>
                            <li>Method declaration and calling</li>
                            <li>Method overloading</li>
                            <li>Scope and access modifiers</li>
                            <li>Static methods and variables</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 5-6: Object-Oriented Programming</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Classes and objects</li>
                            <li>Constructors and destructors</li>
                            <li>Inheritance and super keyword</li>
                            <li>Method overriding</li>
                            <li>Polymorphism and abstraction</li>
                            <li>Encapsulation principles</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 7-8: Advanced OOP & Arrays</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Abstract classes and interfaces</li>
                            <li>Package creation and management</li>
                            <li>Arrays and multidimensional arrays</li>
                            <li>String handling and manipulation</li>
                            <li>Wrapper classes</li>
                            <li>Enum and annotations</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 9-10: Exception Handling & Collections</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Exception handling mechanisms</li>
                            <li>Try-catch-finally blocks</li>
                            <li>Custom exceptions</li>
                            <li>Collections framework</li>
                            <li>List, Set, Map interfaces</li>
                            <li>ArrayList, HashMap, TreeSet</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 11-12: File I/O & Multithreading</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>File handling operations</li>
                            <li>Streams and readers/writers</li>
                            <li>Serialization and deserialization</li>
                            <li>Thread creation and management</li>
                            <li>Synchronization and locks</li>
                            <li>Concurrent programming</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 13-16: Advanced Java & Frameworks</h3>
                        <div class="duration">Duration: 4 weeks</div>
                        <ul>
                            <li>JDBC and database connectivity</li>
                            <li>Lambda expressions and streams</li>
                            <li>Introduction to Spring Framework</li>
                            <li>RESTful web services</li>
                            <li>Unit testing with JUnit</li>
                            <li>Build tools (Maven/Gradle)</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 17-20: Enterprise Development</h3>
                        <div class="duration">Duration: 4 weeks</div>
                        <ul>
                            <li>Spring Boot applications</li>
                            <li>Microservices architecture</li>
                            <li>Database integration (JPA/Hibernate)</li>
                            <li>Security implementation</li>
                            <li>Deployment and DevOps</li>
                            <li>Final project development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadDSARoadmap() {
    const dsaRoadmap = document.getElementById('dsa-roadmap');
    dsaRoadmap.innerHTML = `
        <div class="container">
            <div class="roadmap-header">
                <h2><i class="fas fa-project-diagram"></i> Data Structures & Algorithms Roadmap</h2>
                <p>Master problem-solving and ace coding interviews</p>
            </div>
            
            <!-- LeetCode Practice Section -->
            <div class="compiler-section">
                <h3><i class="fas fa-code"></i> Practice DSA Problems</h3>
                <div class="leetcode-container">
                    <div class="practice-platforms">
                        <div class="platform-card">
                            <h4><i class="fas fa-trophy"></i> LeetCode</h4>
                            <p>Premium coding interview preparation</p>
                            <a href="https://leetcode.com/problemset/all/" target="_blank" class="platform-btn leetcode-btn">Start Practicing</a>
                        </div>
                        <div class="platform-card">
                            <h4><i class="fas fa-code-branch"></i> HackerRank</h4>
                            <p>Skill-based coding challenges</p>
                            <a href="https://www.hackerrank.com/domains/data-structures" target="_blank" class="platform-btn hackerrank-btn">Practice DSA</a>
                        </div>
                        <div class="platform-card">
                            <h4><i class="fas fa-laptop-code"></i> CodeChef</h4>
                            <p>Competitive programming platform</p>
                            <a href="https://www.codechef.com/practice" target="_blank" class="platform-btn codechef-btn">Solve Problems</a>
                        </div>
                        <div class="platform-card">
                            <h4><i class="fas fa-fire"></i> Codeforces</h4>
                            <p>Contest-based problem solving</p>
                            <a href="https://codeforces.com/problemset" target="_blank" class="platform-btn codeforces-btn">Join Contests</a>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Practice Section -->
                <div class="quick-practice">
                    <h4>Quick Practice - Online IDE</h4>
                    <div class="compiler-container">
                        <iframe 
                            src="https://www.programiz.com/cpp-programming/online-compiler/" 
                            width="100%" 
                            height="500" 
                            frameborder="0"
                            title="C++ Online Compiler for DSA">
                        </iframe>
                    </div>
                </div>
            </div>
            
            <div class="roadmap-timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 1-2: Foundation & Complexity Analysis</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Time and Space Complexity (Big O notation)</li>
                            <li>Asymptotic Analysis</li>
                            <li>Best, Average, and Worst case scenarios</li>
                            <li>Mathematical foundations</li>
                            <li>Problem-solving techniques</li>
                            <li>Practice: Basic complexity problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 3-4: Arrays & Strings</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Array operations and manipulations</li>
                            <li>Two-pointer technique</li>
                            <li>Sliding window problems</li>
                            <li>String algorithms and pattern matching</li>
                            <li>Sorting algorithms (Bubble, Selection, Insertion)</li>
                            <li>Practice: 20+ LeetCode easy problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 5-6: Linked Lists</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Singly and Doubly Linked Lists</li>
                            <li>Circular Linked Lists</li>
                            <li>List operations (insertion, deletion, traversal)</li>
                            <li>Reverse linked list variations</li>
                            <li>Merge operations</li>
                            <li>Practice: Linked list problems on LeetCode</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 7-8: Stacks & Queues</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Stack implementation and operations</li>
                            <li>Queue, Deque, Priority Queue</li>
                            <li>Applications: Expression evaluation, Parentheses matching</li>
                            <li>Monotonic stack problems</li>
                            <li>BFS using queues</li>
                            <li>Practice: Stack/Queue problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 9-10: Trees & Binary Search Trees</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Binary trees and tree traversals</li>
                            <li>Binary Search Trees (BST)</li>
                            <li>Tree construction and validation</li>
                            <li>Lowest Common Ancestor (LCA)</li>
                            <li>Tree diameter and height problems</li>
                            <li>Practice: Tree problems on LeetCode</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 11-12: Advanced Trees</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>AVL Trees and Red-Black Trees</li>
                            <li>Segment Trees and Fenwick Trees</li>
                            <li>Trie (Prefix Tree)</li>
                            <li>Heap and Priority Queue implementation</li>
                            <li>Tree DP problems</li>
                            <li>Practice: Advanced tree problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 13-14: Hashing & Hash Tables</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Hash function design</li>
                            <li>Collision resolution techniques</li>
                            <li>HashMap and HashSet operations</li>
                            <li>Applications in problem solving</li>
                            <li>Two-sum and related problems</li>
                            <li>Practice: Hashing problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 15-16: Graphs - Basics</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Graph representation (Adjacency List/Matrix)</li>
                            <li>Depth-First Search (DFS)</li>
                            <li>Breadth-First Search (BFS)</li>
                            <li>Connected components</li>
                            <li>Cycle detection</li>
                            <li>Practice: Basic graph traversal problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 17-18: Advanced Graph Algorithms</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Topological Sorting</li>
                            <li>Shortest Path (Dijkstra, Bellman-Ford)</li>
                            <li>Minimum Spanning Tree (Kruskal, Prim)</li>
                            <li>Union-Find (Disjoint Set)</li>
                            <li>Graph coloring and bipartite graphs</li>
                            <li>Practice: Advanced graph problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 19-20: Dynamic Programming - Basics</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>DP fundamentals and memoization</li>
                            <li>1D DP problems (Fibonacci, Climbing Stairs)</li>
                            <li>2D DP problems (Grid paths, Edit distance)</li>
                            <li>Knapsack problems (0/1, Unbounded)</li>
                            <li>Longest Common Subsequence (LCS)</li>
                            <li>Practice: Classic DP problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 21-22: Advanced Dynamic Programming</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>DP on trees and graphs</li>
                            <li>Digit DP and Bitmask DP</li>
                            <li>DP optimization techniques</li>
                            <li>Matrix chain multiplication</li>
                            <li>Palindrome partitioning</li>
                            <li>Practice: Hard DP problems</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Week 23-24: Advanced Topics & Interview Prep</h3>
                        <div class="duration">Duration: 2 weeks</div>
                        <ul>
                            <li>Greedy algorithms and proofs</li>
                            <li>Backtracking and branch-and-bound</li>
                            <li>Advanced sorting (Merge, Quick, Heap sort)</li>
                            <li>String algorithms (KMP, Rabin-Karp)</li>
                            <li>System design basics for coding interviews</li>
                            <li>Mock interviews and problem-solving strategies</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Study Resources Section -->
            <div class="resources-section">
                <h3><i class="fas fa-book"></i> Recommended Resources</h3>
                <div class="resources-grid">
                    <div class="resource-card">
                        <h4>Books</h4>
                        <ul>
                            <li>Introduction to Algorithms (CLRS)</li>
                            <li>Cracking the Coding Interview</li>
                            <li>Elements of Programming Interviews</li>
                            <li>Algorithm Design Manual</li>
                        </ul>
                    </div>
                    <div class="resource-card">
                        <h4>Online Courses</h4>
                        <ul>
                            <li>MIT 6.006 Introduction to Algorithms</li>
                            <li>Stanford CS161 Design and Analysis of Algorithms</li>
                            <li>Coursera Algorithms Specialization</li>
                            <li>GeeksforGeeks DSA Course</li>
                        </ul>
                    </div>
                    <div class="resource-card">
                        <h4>YouTube Channels</h4>
                        <ul>
                            <li>Abdul Bari</li>
                            <li>Tushar Roy - Coding Made Simple</li>
                            <li>Back To Back SWE</li>
                            <li>NeetCode</li>
                        </ul>
                    </div>
                    <div class="resource-card">
                        <h4>Practice Platforms</h4>
                        <ul>
                            <li>LeetCode (Premium recommended)</li>
                            <li>HackerRank</li>
                            <li>CodeChef</li>
                            <li>Codeforces</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadMistakesSection() {
    const mistakesSection = document.getElementById('mistakes-section');
    mistakesSection.innerHTML = `
        <div class="container">
            <div class="roadmap-header mistakes-header">
                <h2><i class="fas fa-exclamation-triangle"></i> Common Programming Mistakes</h2>
                <div class="quote-section">
                    <blockquote>
                        <i class="fas fa-quote-left"></i>
                        "Coding will be learned from mistakes only. Every error is a stepping stone to mastery."
                        <i class="fas fa-quote-right"></i>
                    </blockquote>
                    <p class="quote-author">- Programming Wisdom</p>
                </div>
                <p>Learn from the most common mistakes beginners make in each programming language</p>
            </div>
            
            <!-- Language Tabs -->
            <div class="mistakes-tabs">
                <button class="mistake-tab active" onclick="showMistakes('c')">C Programming</button>
                <button class="mistake-tab" onclick="showMistakes('python')">Python</button>
                <button class="mistake-tab" onclick="showMistakes('java')">Java</button>
                <button class="mistake-tab" onclick="showMistakes('dsa')">DSA</button>
                <button class="mistake-tab" onclick="showMistakes('general')">General</button>
            </div>
            
            <!-- C Mistakes -->
            <div id="c-mistakes" class="mistakes-content active">
                <h3><i class="fab fa-cuttlefish"></i> C Programming Common Mistakes (Low-level pitfalls)</h3>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-file-code"></i> Forgetting to Include Headers</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Using printf without #include &lt;stdio.h&gt;</li>
                                <li>Using malloc without #include &lt;stdlib.h&gt;</li>
                                <li>Using string functions without #include &lt;string.h&gt;</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Hello World"); // Error: printf not declared<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>#include &lt;stdio.h&gt;<br><br>int main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("Hello World");<br>&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-percentage"></i> Mismatched Format Specifiers</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Using %d for a float value</li>
                                <li>Forgetting & in scanf for variables</li>
                                <li>Wrong format specifier for data type</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>float num = 3.14;<br>printf("%d", num); // Wrong specifier<br>scanf("%d", num); // Missing &</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>float num = 3.14;<br>printf("%.2f", num); // Correct specifier<br>scanf("%f", &num); // Correct with &</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-code"></i> Not Initializing Variables</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Reading from variables before assigning values</li>
                                <li>Leads to garbage values</li>
                                <li>Unpredictable program behavior</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int x, y;<br>int sum = x + y; // Garbage values</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int x = 0, y = 0;<br>int sum = x + y; // Initialized values</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-list-ol"></i> Array Out-of-bounds Access</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Accessing arr[n] when valid indices are 0 to n-1</li>
                                <li>Off-by-one errors in loops</li>
                                <li>Buffer overflow vulnerabilities</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int arr[5];<br>for(int i = 0; i <= 5; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;arr[i] = i; // arr[5] is out of bounds<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int arr[5];<br>for(int i = 0; i < 5; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;arr[i] = i; // Valid indices 0-4<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-equals"></i> Confusing Assignment (=) with Comparison (==)</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Writing if (x = 5) instead of if (x == 5)</li>
                                <li>Assignment in conditional statements</li>
                                <li>Logic errors in conditions</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int x = 10;<br>if (x = 5) { // Assignment, always true<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("x is 5");<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int x = 10;<br>if (x == 5) { // Comparison<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("x is 5");<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-memory"></i> Memory Management Errors</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Forgetting to free() dynamically allocated memory</li>
                                <li>Double freeing memory</li>
                                <li>Using freed pointers (dangling pointers)</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int *ptr = malloc(sizeof(int) * 10);<br>// Use ptr<br>// Forgot to free(ptr); - Memory leak</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int *ptr = malloc(sizeof(int) * 10);<br>if (ptr != NULL) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Use ptr<br>&nbsp;&nbsp;&nbsp;&nbsp;free(ptr);<br>&nbsp;&nbsp;&nbsp;&nbsp;ptr = NULL;<br>}</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Python Mistakes -->
            <div id="python-mistakes" class="mistakes-content">
                <h3><i class="fab fa-python"></i> Python Common Mistakes (High-level dynamic issues)</h3>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-indent"></i> Indentation Errors</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Python uses whitespace - inconsistent tabs/spaces cause IndentationError</li>
                                <li>Mixing tabs and spaces in the same file</li>
                                <li>Missing indentation in code blocks</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>if x > 5:<br>print("Greater") # IndentationError</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>if x > 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Greater") # Proper 4-space indentation</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-equals"></i> Confusing = with ==</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Writing if x = 5: instead of if x == 5:</li>
                                <li>Python won't even allow = inside condition (SyntaxError)</li>
                                <li>Assignment vs comparison confusion</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>x = 10<br>if x = 5: # SyntaxError: invalid syntax<br>&nbsp;&nbsp;&nbsp;&nbsp;print("x is 5")</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>x = 10<br>if x == 5: # Comparison operator<br>&nbsp;&nbsp;&nbsp;&nbsp;print("x is 5")</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-list"></i> Misusing Mutable Default Arguments</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Using mutable objects (list, dict) as default parameters</li>
                                <li>Causes unexpected accumulation across function calls</li>
                                <li>Shared state between function calls</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>def f(x, lst=[]):<br>&nbsp;&nbsp;&nbsp;&nbsp;lst.append(x)<br>&nbsp;&nbsp;&nbsp;&nbsp;return lst<br># Accumulates across calls!</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>def f(x, lst=None):<br>&nbsp;&nbsp;&nbsp;&nbsp;if lst is None:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lst = []<br>&nbsp;&nbsp;&nbsp;&nbsp;lst.append(x)<br>&nbsp;&nbsp;&nbsp;&nbsp;return lst</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-font"></i> Type Confusion</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Mixing str and int (e.g., "2" + 2)</li>
                                <li>Forgetting int(input()) converts input to integer</li>
                                <li>String concatenation vs arithmetic operations</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>age = input("Enter age: ") # Returns string<br>next_year = age + 1 # TypeError</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>age = int(input("Enter age: ")) # Convert to int<br>next_year = age + 1 # Works correctly</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-sort-numeric-up"></i> Off-by-one Errors in Loops</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Misunderstanding range(n) produces values 0...n-1</li>
                                <li>Incorrect loop boundaries</li>
                                <li>Index calculation errors</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>arr = [1, 2, 3, 4, 5]<br>for i in range(1, 6): # Wrong range<br>&nbsp;&nbsp;&nbsp;&nbsp;print(arr[i]) # IndexError on arr[5]</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>arr = [1, 2, 3, 4, 5]<br>for i in range(len(arr)): # 0 to 4<br>&nbsp;&nbsp;&nbsp;&nbsp;print(arr[i]) # Correct indices</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-fingerprint"></i> Misusing is vs ==</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>is checks identity (same object in memory)</li>
                                <li>== checks equality (same value)</li>
                                <li>Using is for value comparison instead of ==</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>a = [1, 2, 3]<br>b = [1, 2, 3]<br>if a is b: # False - different objects<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Same")</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>a = [1, 2, 3]<br>b = [1, 2, 3]<br>if a == b: # True - same values<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Same values")</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Java Mistakes -->
            <div id="java-mistakes" class="mistakes-content">
                <h3><i class="fab fa-java"></i> Java Common Mistakes (Strict OOP pitfalls)</h3>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-file-signature"></i> Filename Not Matching Public Class</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Class HelloWorld must be in HelloWorld.java</li>
                                <li>Public class name must match filename exactly</li>
                                <li>Case sensitivity matters</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>// File: hello.java<br>public class HelloWorld {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Compilation error<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>// File: HelloWorld.java<br>public class HelloWorld {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Correct match<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-play"></i> Forgetting Main Method Signature</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Must be: public static void main(String[] args)</li>
                                <li>Missing public, static, or void keywords</li>
                                <li>Wrong parameter type or name</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>public void main(String[] args) { // Missing static<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello");<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello");<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-font"></i> Case Sensitivity Issues</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Mixing up String vs string</li>
                                <li>System.out vs system.out</li>
                                <li>Java is case-sensitive language</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>string name = "John"; // 'string' doesn't exist<br>system.out.println(name); // 'system' not found</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>String name = "John"; // Capital 'S'<br>System.out.println(name); // Capital 'S'</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-equals"></i> Confusing == vs .equals()</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>== compares references (memory addresses)</li>
                                <li>.equals() compares values (content)</li>
                                <li>Using == for String comparison</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>String s1 = new String("Hello");<br>String s2 = new String("Hello");<br>if (s1 == s2) // False - different objects</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>String s1 = new String("Hello");<br>String s2 = new String("Hello");<br>if (s1.equals(s2)) // True - same content</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-null"></i> Null Pointer Exceptions</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Trying to call a method on an uninitialized object</li>
                                <li>obj.method() when obj = null</li>
                                <li>Not checking for null before use</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>String str = null;<br>int length = str.length(); // NullPointerException</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>String str = null;<br>if (str != null) {<br>&nbsp;&nbsp;&nbsp;&nbsp;int length = str.length();<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-exchange-alt"></i> Forgetting Type Conversions</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Implicit narrowing not allowed (e.g., int i = 3.5;)</li>
                                <li>Must use explicit casting (int) 3.5</li>
                                <li>Loss of precision warnings</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int number = 3.14; // Compilation error<br>double d = 10.5;<br>int i = d; // Error</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int number = (int) 3.14; // Explicit cast<br>double d = 10.5;<br>int i = (int) d; // Explicit cast</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- DSA Mistakes -->
            <div id="dsa-mistakes" class="mistakes-content">
                <h3><i class="fas fa-project-diagram"></i> DSA Common Mistakes</h3>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-infinity"></i> Infinite Loops</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Incorrect loop termination conditions</li>
                                <li>Not updating loop variables</li>
                                <li>Wrong boundary conditions</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>while (left <= right) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Binary search without updating left/right<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>while (left <= right) {<br>&nbsp;&nbsp;&nbsp;&nbsp;mid = (left + right) / 2;<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] == target) return mid;<br>&nbsp;&nbsp;&nbsp;&nbsp;else if (arr[mid] < target) left = mid + 1;<br>&nbsp;&nbsp;&nbsp;&nbsp;else right = mid - 1;<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-sort-numeric-up"></i> Off-by-One Errors</h4>
                            <span class="severity high">High Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Wrong array bounds (< vs <=)</li>
                                <li>Incorrect loop iterations</li>
                                <li>Index calculation errors</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>for (int i = 0; i <= arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Array index out of bounds<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>for (int i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;// Correct bounds<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-recycle"></i> Not Handling Edge Cases</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Empty arrays or null inputs</li>
                                <li>Single element cases</li>
                                <li>Maximum/minimum value scenarios</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int findMax(int[] arr) {<br>&nbsp;&nbsp;&nbsp;&nbsp;int max = arr[0]; // What if arr is empty?<br>&nbsp;&nbsp;&nbsp;&nbsp;// ...<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int findMax(int[] arr) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr == null || arr.length == 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new IllegalArgumentException();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;int max = arr[0];<br>&nbsp;&nbsp;&nbsp;&nbsp;// ...<br>}</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-tachometer-alt"></i> Poor Time Complexity</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Using nested loops when not needed</li>
                                <li>Not optimizing recursive solutions</li>
                                <li>Ignoring built-in efficient methods</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>// O(n²) solution for finding duplicates<br>for (int i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;for (int j = i+1; j < arr.length; j++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] == arr[j]) return true;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>// O(n) solution using HashSet<br>Set<Integer> seen = new HashSet<>();<br>for (int num : arr) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (!seen.add(num)) return true;<br>}</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- General Mistakes -->
            <div id="general-mistakes" class="mistakes-content">
                <h3><i class="fas fa-code"></i> General Programming Mistakes</h3>
                <div class="mistakes-grid">
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-comment"></i> Poor Code Documentation</h4>
                            <span class="severity low">Low Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>No comments or documentation</li>
                                <li>Outdated or misleading comments</li>
                                <li>Not explaining complex logic</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int x = (a * b + c) / (d - e); // No explanation</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>// Calculate weighted average score<br>int weightedScore = (mathScore * mathWeight + scienceScore) / (totalWeight - bonus);</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-font"></i> Poor Naming Conventions</h4>
                            <span class="severity low">Low Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Using single letter variables</li>
                                <li>Non-descriptive function names</li>
                                <li>Inconsistent naming styles</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>❌ Wrong:</strong></p>
                                <code>int a, b, c;<br>void func1() { }<br>String s;</code>
                                <p><strong>✅ Correct:</strong></p>
                                <code>int studentAge, maxScore, currentLevel;<br>void calculateGPA() { }<br>String studentName;</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-bug"></i> Not Testing Edge Cases</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Only testing happy path scenarios</li>
                                <li>Not considering boundary values</li>
                                <li>Ignoring error conditions</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>Test Cases to Consider:</strong></p>
                                <ul>
                                    <li>Empty inputs (null, "", [])</li>
                                    <li>Minimum and maximum values</li>
                                    <li>Invalid inputs</li>
                                    <li>Single element cases</li>
                                    <li>Large datasets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mistake-card">
                        <div class="mistake-header">
                            <h4><i class="fas fa-copy"></i> Copy-Paste Programming</h4>
                            <span class="severity medium">Medium Severity</span>
                        </div>
                        <div class="mistake-content">
                            <p><strong>Common Issues:</strong></p>
                            <ul>
                                <li>Copying code without understanding</li>
                                <li>Not adapting code to specific needs</li>
                                <li>Creating duplicate code blocks</li>
                            </ul>
                            <div class="code-example">
                                <p><strong>Better Approach:</strong></p>
                                <ul>
                                    <li>Understand the code before copying</li>
                                    <li>Create reusable functions</li>
                                    <li>Follow DRY principle (Don't Repeat Yourself)</li>
                                    <li>Refactor common patterns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Tips Section -->
            <div class="tips-section">
                <h3><i class="fas fa-lightbulb"></i> Tips to Avoid Common Mistakes</h3>
                <div class="tips-grid">
                    <div class="tip-card">
                        <h4><i class="fas fa-code"></i> Code Review</h4>
                        <p>Always review your code before submitting. Look for potential issues and edge cases.</p>
                    </div>
                    <div class="tip-card">
                        <h4><i class="fas fa-test-tube"></i> Test Thoroughly</h4>
                        <p>Test with various inputs including edge cases, empty inputs, and boundary values.</p>
                    </div>
                    <div class="tip-card">
                        <h4><i class="fas fa-book"></i> Read Documentation</h4>
                        <p>Understand the language features and library functions before using them.</p>
                    </div>
                    <div class="tip-card">
                        <h4><i class="fas fa-users"></i> Learn from Others</h4>
                        <p>Study well-written code, participate in code reviews, and learn from experienced developers.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show specific mistakes content
function showMistakes(language) {
    // Hide all mistake contents
    const contents = document.querySelectorAll('.mistakes-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.mistake-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected content and activate tab
    document.getElementById(`${language}-mistakes`).classList.add('active');
    event.target.classList.add('active');
}

// Form handling
function setupFormHandlers() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                currentUser = result.user;
                closeModal('loginModal');
                updateUIForLoggedInUser();
                showNotification('Login successful!', 'success');
            } else {
                showNotification(result.message || 'Login failed', 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            showNotification('Network error. Please try again.', 'error');
        }
    });
    
    // Signup form
    document.getElementById('signupForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        
        const signupData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: password
        };
        
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                closeModal('signupModal');
                showNotification('Account created successfully! Please login.', 'success');
                openModal('loginModal');
            } else {
                showNotification(result.message || 'Signup failed', 'error');
            }
        } catch (error) {
            console.error('Signup error:', error);
            showNotification('Network error. Please try again.', 'error');
        }
    });
}

// Update UI for logged in user
function updateUIForLoggedInUser() {
    const authButtons = document.querySelector('.nav-auth');
    authButtons.innerHTML = `
        <span style="color: white; margin-right: 1rem;">Welcome, ${currentUser.name}!</span>
        <button class="btn-login" onclick="logout()">Logout</button>
    `;
}

// Logout function
function logout() {
    currentUser = null;
    const authButtons = document.querySelector('.nav-auth');
    authButtons.innerHTML = `
        <button class="btn-login" onclick="openModal('loginModal')">Login</button>
        <button class="btn-signup" onclick="openModal('signupModal')">Sign Up</button>
    `;
    showNotification('Logged out successfully!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#333';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
